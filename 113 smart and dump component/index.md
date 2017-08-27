# smart and dump component

We can spliting components in two type :

1. Smart Components :  sometimes as application-level components, container components or controller components
2. Dumb Components : sometimes as pure components or UI components

The example in this exerise is very frequent, we have the smart component inject the data to the dumb component via @Input, and receive any actions that the presentation component might trigger via @Output.

Using @Output the presentation component remains isolated from the smart component via a clearly defined interface:

- UI component only knows that it emitted an event, but does not know what are the receivers of the event or what will the receivers do in response to the event
- smart component subscribes custom event and reacts to the event, but it does not know what triggered the event.
