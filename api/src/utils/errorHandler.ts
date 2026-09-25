import { STATUS_CODES } from "http";
import { ErrorRequestHandler } from "express";

// Last-resort error handler, registered after every route in server.ts.
//
// Without it, Express's built-in handler answers with an HTML page, and unless
// NODE_ENV=production that page carries the full stack trace — absolute paths,
// the username, the dependency layout — to whoever sent the request. A POST of
// malformed JSON to any route was enough. api/scripts.sh now sets NODE_ENV for
// prod; this is the backstop for any launch path that forgets it, and it
// answers in JSON like the routes do.
//
// An error carrying a 4xx status (body-parser sets 400 on malformed JSON, 413
// on an oversized body) is the client's: echo the status, skip the log so
// scanner junk stays out of it. Anything else is ours: log the stack to the
// app log and return a bare 500.
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (res.headersSent) {
    // Too late for a clean response; Express's handler closes the connection.
    next(err);
    return;
  }
  const errStatus: unknown = err?.status ?? err?.statusCode;
  const status =
    typeof errStatus === "number" && errStatus >= 400 && errStatus < 600
      ? errStatus
      : 500;
  if (status >= 500) {
    console.error(`[${status}] ${req.method} ${req.originalUrl}`, err);
  }
  res.status(status).json({ error: STATUS_CODES[status] ?? "Error" });
};
