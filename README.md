# YelpCamp-Student-Code-Along
This project uses express, body-parser, mongoose, connect-flash, passport, and the method-override JS libraries, in addition to using MongoDB for the server-side database.

This project is the last code-along student project from the Udemy class "The Web Developer Bootcamp" by Colt Steele.
This version has changes to the conditional logic for the back-end, to prevent a catastrophic error that would actually cause the server to crash.
That crash was caused when a user attempted to manually modify the URL of the dynamically-generated content pages, while the server was running.
The fix was to check to make sure the entry existed in the MongoDB before attempting to display/edit/show it.
