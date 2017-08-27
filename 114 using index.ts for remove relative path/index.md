# using index.ts for remove relative path


A barrel is a way of wrapping up a bunch of modules into a single module that the rest of your application can reference instead. It helps consolidate your imports into something a lot more readable.

In this example we want to reduce the number of imports then  we just creat a new file "index.ts".We then fill it with everything we want to export.Once this is done we can update our original app.component with a consolidated version of our imports.

