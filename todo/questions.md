<h3>1. What is the concept behind Angular Evergreen?</h3>
<h4>My Answer</h4> 
> Basically, there is going to be new code introduced from a new version of Angular that won't be compatible with an older version of Angular. So, the Angular team has created automated tools, or explicit guides on how to update your code via update.angular.io. In this way, you're never left looking all over the internet for answers on how to update your code to the newest version of Angular.

<h4>Book Answer</h4>
> Angular Evergreen is about keeping the version of Angular up to date with the latest release. Keeping up to date is made feasible by sticking to platform fundamentals and avoiding unnecessary third-party libraries.

<h3>2. Using the double-click example for reactive streams, implement the following steps using RxJS: Listen to click events from the HTML target with the `fromEvent` function. Determine if the mouse was double-clicked within a 250ms timeframe using `throttleTime`, `asyncScheduler`, `buffer`, and `filter` operators. If a double-click is detected, display an alert in the browser.</h3>
<h4>My Answer</h4>
> First, I need to import the functions that I'm going to use from RxJS.
> 
> To use `fromEvent`, I know that it creates an Observable that emits[1] events of a specific type coming from the given target. In our case, we need to emit a `click` event from `document`, and save the Observable to a `clicks` variable. 
> 
> Next, to use the `buffer` function we'll need to pipe [2] the `clicks` Observable event to a buffer, which will emit a `closingNotifier` Observable event which will signal the buffer to be emitted on the *output* Observable. This output Observable will be an Observable of buffers, which are basically arrays of values. 
> 
> To use the `throttleTime` function we'll need to use it inside of `buffer`. We know that `throttleTime` emits the source Observable values on the output Observable when its internal timer is disabled, i.e. throttle invokes function at most once per every *x* milliseconds. As soon as the first source value arrives, it is forwarded to the output Observable, and then the timer is enabled. After **duration** milliseconds (or the time unit determined internally by the optional **scheduler**) has passed, the timer is disabled, and this process repeats for the next source value. In our case, we need to throttle for `250` milliseconds, using an `asyncScheduler`, and a `throttleConfig` with settings for a trailing throttle.
> 
> To use `filter`, we'll need to stitch it to our pipe, after our buffer has emitted an Observable event. We know that `filter` is similar to the well-known `Array.prototype.filter` method, the operator takes values from the source Observable, passes them through a `predicate` function, and only emits those values that yielded `true`. In our case we want to filter double-clicks, so our predicate function will take in a click array, and emit only the arrays of length 2.
> 
> Finally, we subscribe to the pipe's emitted Observable event, and pass an anonymous function call to the `subscribe`'s `next` argument. In the anonymous function scope, we call the `Window` interface, and call its `alert` method to display an alert dialog with a passed `message` argument.
> 
> References:
> 
> [1] A function can **return** a value. But, when we know that the function that we called is supposed to send those results to another function, we cannot use **return** anymore. Instead, we use **emit**. We expect the function to **emit** the results to another function by our call i.e. A function can **return** results and **emit** events.
> 
> An analogy is a radio station. The event emitter, the radio station broadcasting, sends out a certain event to any method that is waiting to react to it. Nobody has to be listening in order to actually broadcast the event, but if there are no listeners then nothing happens. The listener methods, the receiver in your car, are listening for a *specific* event. Once this specific event has been emitted, the method *reacts* to the event, thus invoking the method. If there is never an event emitted that matches the criteria of the listener, then nothing happens, and just like in your car you get no music.
> 
> [2] `pipe` is a method on Observable and is used to stitch together functional operators into a chain. A functional operator is a function you pass into a pipe. And, pipe returns its own Observable. i.e. Observable in, Observable out. The "pipable" operator is a **function that takes Observables** as input, and returns another Observable. Pipable operators are **the current and recommended way** of using operators since RxJS 5.5.

<h4>Book Answer</h4>
> Referring to the _Reactive data streams_ section, and the double-click example that is discussed in the chapter:
> <pre><code>import { fromEvent, asyncScheduler } from 'rxjs';
> import { buffer, filter, throttleTime } from 'rxjs/operators';
> 
> const throttleConfig = {
>   leading: false,
>   trailing: true
> }
> 
> // click event stream
> const clicks$ = fromEvent(document, 'click');
> clicks$.pipe(
>   buffer(clicks$.pipe(throttleTime(250, asyncScheduler, throttleConfig))),
>   // if array is equal to 2, double click occurred
>   filer(clickArray => clickArray.length === 2);
> ).subscribe(() => window.alert('Are you sure?'));
> </code></pre>

<h3>3. What is NgRx, and what role does it play in an Angular application?</h3>
<h4>My Answer</h4>
> NgRx is a framework for building Redux-like (a popular React.js library) reactive applications in Angular. It leverages the Flux pattern using RxJS to enable sophisticated state management for your applications. The Flux pattern defines a series of components that manage a store that stores the state of your application via dispatchers that trigger/handle actions and view functions that read values from the store. You keep the state of your application in a store where access to the store is only possible through well-defined and decoupled functions, resulting in architecture that scales well because, in isolation, decoupled functions are easy to reason with and write automated unit tests for.
> 
> The following is a NgRx data flow:
>
> [comment]: <> (TODO: Add the NgRx data flow image here)
> 
> NgRx provides libraries for:
> * Managing global, and local state. 
> * Isolation of side effects to promote a cleaner component architecture.
> * Entity collection management.
> * Integration with the Angular Router.
> * Developer tooling that enhances developer experience when building many types of applications.
> 
> Packages are divided into the following categories:
> * State
>   * Store - RxJS powered global state management for Angular apps, inspired by Redux.
>   * Effects - Side effect model for @ngrx/store.
>   * Router Store - Bindings to connect the Angular Router to @ngrx/store.
>   * Entity - Entity State adapter for managing record collections.
>   * ComponentStore - Standalone library for managing local/component state.
> * Data
>   * Data - Extension for simplified entity data management.
> * View
>   * Component - Extension for fully reactive Angular applications.
> * Developer Tooling
>   * Store Devtools - Instrumentation for @ngrx/store that enables visual tracking of state and time-travel debugging.
>   * Schematics - Scaffolding library for Angular applications using NgRx libraries.
> 
> State management with NgRx allows developers to write atomic, self-contained, and composable pieces of code creating actions, reducers, and selectors.
> 
> The following is a NgRx architectural overview:
> 
> [comment]: <> (TODO: Add the NgRx architectural overview image here)
> 
> Consider the very top of the diagram as an Observable action stream, where actions can be dispatched and acted upon as denoted by the circles. Effects and components can dispatch an action. Reducers and effects can act upon these actions to either store values in the store or trigger an interaction with the server. Selectors are leveraged by components to read values from the store.

<h4>Book Answer</h4>
> The NgRx library for Angular leverages the Flux pattern to enable sophisticated state management for your applications. There are some excellent reasons to use NgRx; for example, it's a great fit if you are dealing with 3+ input streams into your application. In such a scenario, the overhead of dealing with so many events makes it worthwhile to introduce a new coding paradigm to your project. However, most applications only have two input streams: REST APIs, and user input. To a lesser extent, NgRx may make sense if you are writing offline-first **Progressive Web Apps** (**PWAs**), where you may have to persist complicated state information, or architecting a niche enterprise app with similar needs.

<h3>4. What is the difference between a module, a component, and a service in Angular?</h3>
<h4>My Answer</h4>
> A module is made up from one or more components, directives, services, etc. They do not control any HTML. Modules declare which components can be used by components belonging to *other* modules, which classes will be injected by the dependency injector, and which component gets bootstrapped. One, or many modules combine to make an Application. Modules breakup an application into logical pieces of code, allowing you to manage your components, and bring modularity to your application. Each module performs a single task. Denoted by `@ngModule()`.
> 
> A component is made up of classes where you write your logic for the page you want to display. Components will have an associated template. Components control Views (HTML). Components communicate with other components, and services to bring functionality to the application. Each component can use other components, which are declared in the same module. To use components declared in other modules, they need to be exported from this module, and the module needs to be imported. Denoted by `@Component()`.
> 
> A service is a class that encapsulates some sort of functionality, and provides it as a service for the rest of the application. Services are injected by components. We use @Injectable for services. Services are used for common methods for some common functions across different Components. They are simple classes with functions, members, and not HTML content. They are used when we want to reduce duplication of code, access, or store data. For data, or logic, that isn't associated with a specific view, and that you want to share across components, you create a *service* class. A service class definition is immediately preceded by the `@Injectable()` **decorator**. The decorator provides the metadata that allows other providers to be **injected** as dependencies into your class. DI lets you keep your component classes lean and efficient. They don't fetch data from the server, validate user input, or log directly to the console; they delegate such tasks to services.
> 
> i.e. An analogy is an Angular application is a building. A building can have *n* number of apartments inside it. An apartment is a **module**.  An apartment can have *n* number of rooms which correspond to the building blocks of an Angular application named **components**.
> 
> Each apartment (Module) has rooms (Components), elevators (Services) that enable movement in and out of apartments, and wiring (Pipes) to move/transform electricity to make it useful for the apartments.
> 
> Buildings can also have shared spaces by all building residents, e.g. swimming pool, tennis court, etc. These can be considered components inside of SharedModule.

<h4>Book Answer</h4>
> The most basic unit of an Angular app is a component. A component is the combination of a JavaScript class written in TypeScript and an Angular template written in HTML, CSS, and TypeScript. The class, and the template fit together like a jigsaw puzzle through bindings, so that they can communicate with each other. A component is the most used directive in Angular.
> 
> A service is a class that can be injected into other services or components via Angular's **Dependency Injection** (**DI**) mechanism.
> 
> A module contains metadata about and groups together components, services, directives, pipes, user controls, or other modules to define an Angular application or a feature module. Every Angular application kicks off with a root module. You can organize your application into feature modules, and through lazy loading, you can defer the loading of feature modules until they're needed.
