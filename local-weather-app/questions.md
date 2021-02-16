<h2>Part 1</h2>
<h3>1. What are the motivations for using a CLI tool as opposed to a GUI?</h3>
<h4>My Answer</h4>

> A CLI is faster to get up and running with. Although GUIs are nice, they are a wrapper over a CLI.

<h4>Book Answer</h4>

> CLI commands are repeatable and lend themselves very well to automation through scripting. Remember, anything that can be expressed as a CLI command can also be automated.

<h3>2. For your specific operating system, what is the suggested package manager to use?</h3>
<h4>My Answer</h4>

> Node package manager (npm).

<h4>Book Answer</h4>

> For Windows, you can use Chocolatey or Scoop. For macOS and Linux, you can use Brew.

<h3>3. What are some of the benefits of using a package manager?</h3>
<h4>My Answer</h4>

> It's easy to update your packages, and dependencies if need be.

<h4>Book Answer</h4>

> Package managers make it easier to install and maintain the software on your computer. They configure CLI tools correctly, so they can run without adjusting any settings manually. Additionally, package managers can upgrade your tools to their latest version without the user having to go to multiple websites or launch multiple tools to discover whether there are new versions. Package managers can also install and maintain GUI tools.

<h3>4. What are the benefits of keeping the development environments of the members of your development team as similar to one another as possible?</h3>
<h4>My Answer</h4>

> Less IT costs, less time fixing style/linting issues, easier to read another member's code.

<h4>Book Answer</h4>

> Having identical development environments reduces the chance of a team member experiencing an error due to their development environment configuration. Eliminating environmental factors makes it easier to identify and resolve software bugs. Effectively resolving bugs is a major source of cost and time savings for teams and companies.

<h2>Part 2</h2>
<h3>1. I introduced the concept of a Kanban board. What is it, and what role does a Kanban board play in our software application development?</h3>
<h4>My Answer</h4>

> A Kanban board is a type of software development management tool used to radiate project information to people at all levels.

<h4>Book Answer</h4>

> Kanban is an Agile software development methodology to account for changes in properties and features over time using a prioritized backlog of items that can be worked on. A Kanban board enables collaboration and effortless information radiation amongst team members organizing backlog items by their status, like to do, in progress, and completed. Using a Kanban board, team members and managers understand the work that is completed, in progress, or should be worked on next, eliminating confusion.

<h3>2. What are the different Angular components we generated using the Angular CLI tool to build out our Local Weather app after we initially created it, and what function and role do each of them serve?</h3>
<h4>My Answer</h4>

> We generated an current weather Angular component, a weather data interface, and a weather service.

<h4>Book Answer</h4>

> We generated three main objects using the Angular CLI:
> * `npx ng generate component current-weather`: This generates an Angular component with a component class as a TypeScript file, a component template as an HTML file, a scoped file as a CSS file, and a unit test file in the .spec.ts format. We can use a component to render information to the browser.
> * `npx ng generate interface ICurrentWeather`: This generates a TypeScript file with a TypeScript interface exported from it. An interface defines the shape of the data you're working with and passed between components and services, or between client and server.
> * `npx ng g service weather --flat false`: This generates an Angular service that can be injected into a component like CurrentWeatherComponent.

<h3>3. What are the different ways of binding data in Angular?</h3>
<h4>My Answer</h4>

> One-way, and two-way binding.

<h4>Book Answer</h4>

> There are four main types of binding in Angular. The first three of them are different types of one-way binding, and the last one is two-way binding:
> * **Expression binding**: This binding used the double brackets syntax `{{dataToBind}}`, to bind public properties in your component class to the template, so when the value of the property changes, the template is automatically updated.
> * **Property binding**: This binding used the square bracket syntax `[dataToBind]`, to bind public properties, or inline JavaScript code to `@Input` targets in other components. Components can subscribe to change events to react to changes in bound data.
> * **Event binding** This binding used the parenthesis syntax `(dataToBind)`, to bind to event handlers implemented inline, or in your component class. `@Output` event emitters in components trigger changes that can then be handled by your component.
> * **Two-way binding**: This binding used the banana-in-the-box syntax `[(dataToBind)]`, to implement two-way binding. This means that weather the property is updated in the class, in the template, or through any dependent components, all values are automatically kept in sync. This is the way AngularJS bindings worked by default, and it had severe performance penalties. In Angular, you must explicitly enable this behavior, and outside of limited scenarios, it should not be commonly used.

<h3>4. Why do we need services in Angular?</h3>
<h4>My Answer</h4>

> To follow the separation of concerns programming pattern.

<h4>Book Answer</h4>

> Services allow the implementation of business logic in a decoupled, cohesive, and encapsulated manner. Combined with dependency injection, you can easily follow the DRY principle, and only implement the required business logic once.

<h3>5. What is an observable in RxJS?</h3>
<h4>My Answer</h4>

> An Observable is a data type emitted by an event which can be subscribed to. It is used to introduce a reactive programming pattern into Angular.

<h4>Book Answer</h4>

> An Observable is the most basic building block of RxJS, and represents an event stream, which emits any data received over time. You can think of it as a continuous stream of data that flows in a pipe. The Observable object by itself is benign. It must be activated by calling `.subscribe` on it, which attaches a listener to the event stream. You can implement an anonymous function within the `subscribe` method to handle events. Handlers get executed whenever a new piece of data is received, and an event it emitted. Observables are similar to event-based programming; however, they are more feature-rich through the implementation of `Subject`, which acts as both a listener and an emitter, with configurable behavior to track the history of events.

<h3>6. What is the easiest way to present a clean UI if the data behind your template is falsy?</h3>
<h4>My Answer</h4>

> Implementing null guarding with `*ngIf`.

<h4>Book Answer</h4>

> Using the `*ngIf` structural directive you can control whether large parts of your template get rendered or not. By doing this you can keep the code within the `ngIf` simple, because you don't have to implement the safe navigation operator for every property.
