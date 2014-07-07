frontend-acl
============

Provide possibility to add feature of ACL on frontend

This will help you to hide some UI based on access level.
Every application can have any number of access level, each of access level has access to all previous.

For initilization please set in body two data-* attribute, first one is "data-acl-count", which determine the overall access levels.
and the next one is "data-current-acl", which specify current access level.

Also frontend-acl.js should be included.

After this just put data-acl attributes to dom elements which should be restricted from user with specified access level.
