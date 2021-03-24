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

<h2>Part 3</h2>
<h3>1. What is the test pyramid?</h3>

<h4>My Answer</h4>

> Model for visualizing types of application tests based on recommended number of tests needed going from a low-level to a high-level perspective. In my opinion, the testing pyramid is lacking one further level of abstraction, chaos tests. So, the types of tests from most to least abundant should be: Unit tests -> Integration tests -> UI tests -> Chaos tests.

<h4>Book Answer</h4>

> Mike Cohn's Testing Pyramid effectively summarizes the relative number of tests of each kind we should create for our applications, taking into account their speed and costs.
>
> TESTING PYRAMID IMG
>
> Automating UI tests is costly, because of the risk of high change, making them brittle. In addition, their execution time is slow, each test taking multiple seconds. This forces developers to wait dozens of minutes before they can iterate over changes. As a result, you should implement multiple orders of magnitude fewer tests than your unit tests.
>
> Integration tests exercise the integration of multiple components, so they are at moderate risk of change, and they execute faster than unit test. You should target an order of magnitude less integration tests than your unit tests.
>
> Unit tests are the fastest and cheapest kind of unit tests. They don't depend on any outside data or function. You should implement thousands of unit tests to verify the correctness of your code.

<h3>2. What are fixtures and matchers?</h3>
<h4>My Answer</h4>

> Fixtures and matchers help you write coherent unit tests using the act, arrange, and assert structure.
>
> Fixtures help reduce the amount of repetition in your tests since the arrange part of unit tests can be repetitive, as multiple test cases often require the same setup. They execute before and after a spec, or a group of specs, as scoped within their `describe` block.
>
> Matchers, methods called on the `expect()` assertion, dynamically assert if the expected outcome matches the actual outcome. The combination of expect and matcher is meant to read like a sentence. Obviously, they are used in the assert part of a unit test, and let Jasmine know whether a spec has passed or failed.
>
> Note: Jasmine is a behavior-driven testing framework for browser and Node.js tests. It supports elemental unit testing needs such as test fixtures, asserts, mocks, spies, and reporters. Tests are organized in `describe` blocks, which can be grouped in levels to reflect the structure of a file, class, or multiple tests that belong to a single function. Individual test cases, or specs, are represented in `it` blocks. Specs are organized in a manner so that when they execute, they read like a sentence. E.g.:
>
> JASMINE TEST IMG
>
> Should read, *Converters convertCtoF should convert 0c to 32f*.

<h4>Book Answer</h4>

> Fixtures help reduce code repetition in your tests. The following are four common fixtures in Jasmine:
> * `beforeAll()` - runs before all specs in `describe`
> * `afterAll()` - runs after all specs in `describe` per test fixtures
> * `beforeEach()` - runs before each spec in `describe`
> * `afterEach()` - runs after each spec in `describe`
>
> Matchers assist in asserting the correctness of your tests by comparing expected values to actual values. Below is a list of common Jasmine matchers used in combination with the `expect` assertion:
>
> ```
> expect(expected).toBe(actual)
>                 .toEqual(actual)
>                 .toBeDefined()
>                 .toBeFalsy()
>                 .toThrow(exception)
>                 .nothing()
> ```
>
> For the full extent of Jasmine matchers, see [Jasmine Matchers GitHub](https://jasmine.github.io/api/edge/matchers.html)

<h3>3. What are the differences between a mock, stub, and a spy?</h4>

> Mocks, stubs, and spies are a types of test doubles (think stunt doubles), that do not contain any implementation whatsoever. A test double is a generic term for any case where you replace a production object for testing purposes.
>
> Mocks are fakes that simulate real objects and keep track of when they're called and with what given arguments. A mock is an object that substitutes for a real service, and you use it only within the unit test that provides canned responses within the test. i.e. Mocks are test doubles that are nonfunctional or low-functional substitutes for the real dependencies that your application will use. They allow you to provide predefined responses in your tests, so your tests will always generate the same results.
>
> Stubs are objects we create on the fly, with a subset of the behaviors our dependency has i.e. they simple fakes that are a barebone classes that defines their properties and methods, but with no logic, and they always return the same value. The reason a stub is a class and not a TypeScript interface is because Angular uses tokens for resolving dependencies. TypeScript interfaces don't get translated into JavaScript, so there's no way for Angular to resolve the token. To tell Angular what to inject, you'll need to create a class that fills in like it's an interface.
>
> The biggest difference between a mock and a stub is that: A stub provides a subset of functionality with "manual" behavior overrides, whereas a mock sets expectations and verifies that certain methods were called.
>
> Spies are a specific type of mock object that gives us two benefits: we can simulate return values, and count how many times the method was called and with which parameters. They are used to create isolated unit tests that allow you to measure how your code is executed, so you can guarantee that methods are called with the correct parameters. i.e. A spy is a function that invisibly wraps a method and lets you control what values it returns or monitor how it was called. A test uses a spy to measure if a method was called, how many times it was called, and with what arguments.
>
> In order to use spies with Angular, we're using the internal *SpyObject* class (it's used by Angular to test itself). You can either declare a class by creating a new *SpyObject* on the fly, or you can make your mock class inherit from *SpyObject*. The great thing inheriting or using this class gives us is the *spy* method. The *spy* method lets us override a method and force a return value (as well as watch and ensure the method was called). We use *spy* on our class constructor.

<h4>Book Answer</h4>

> A mock, stub, or spy is used to isolate your unit tests from any external influences, and they do not contain any implementation whatsoever. Mocks are configured in the unit test file to respond to specific function calls with a set of responses that can be made to vary from test to test with ease. A stub is a method with no implementation, either throwing a "not implement" exception or returning a default, often falsy, value. A spy is a wrapper around a mocked property or function with the ability to collect metadata about how outside code interacted with a given property or function, such as the number of times the property or function was called. You can write assertions based on spies to ensure that your code is interacting with external dependencies in the expected manner.

<h3>4. What is the benefit of building Angular in prod mode?</h3>
<h4>My Answer</h4>

> Production mode gives our app the following build optimization features:
>
> * Ahead-of-Time (AOT) Compilation - pre-compiles Angular component templates.
> * Production mode - deploys the production environment which enables *production mode*.
> * Bundling - concatenates your many application and library files into a few bundles.
> * Minification - removes excess whitespace, comments, and optional tokens.
> * Uglification - rewrites code to use short, cryptic variable and function names.
> * Dead code elimination - removes unreferenced modules and much unused code.
>
> In addition, your app will run faster because Angular will disable development specific checks such as the dual change detection cycles. To further optimize for production, we can take advantage of [lazy loading](https://angular.io/guide/deployment#lazy-loading), [performance measuring](https://angular.io/guide/deployment#measure-performance), and [bundle inspection](https://angular.io/guide/deployment#inspect-the-bundles).

<h4>Book Answer</h4>

> Angular ships with a robust build tool that can optimize the size of your bundle by removing redundant, unused, and inefficient code from the debug build and pre-compiling sections of code so browsers can interpret it faster. *Angular's ahead-of-time* (*AOT*) compiler, tree-shaking algorithms, and the Ivy rendering engine all play a part in optimizing your app.
>
> So, a 7MB bundle can become 700KB and load in sub-second speeds using a fast 3G connection. Prod mode is a critical configuration for the efficient delivery of Angular apps. Do not ship an Angular app without first enabling prod mode.

<h3>5. How does GitHub flow work?</h3>
<h4>My Answer</h4>

> You are kept from pushing to the `master` branch, instead you need to create a new branch, add your commits, and push to the new branch. Then a pull request is created on your branch, and merge conflicts/bad code are detected to keep the `master` branch from accepting lower quality code. If your branch passes all code checks then your branch is finally merged to `master`.

<h4>Book Answer</h4>

> As GitHub puts it, "GitHub flow is a lightweight, branch-based workflow that supports teams and projects where deployments are made regularly." GitHub flow consists of 6 steps, as shown in the following graphic from GitHub:
>
> GITHUB FLOW IMG
>
> 1. Branch - always add new code for a bug or feature in a new branch.
> 2. Commit - make multiple commits to your branch.
> 3. Create a pull request - signal the readiness of your work to your team members and view CI results in a pull request.
> 4. Discuss and review - request a review of your code changes, address general or line-level comments, and make necessary modifications.
> 5. Deploy - optionally test your code on a test server or in production with the ability to roll back to the master.
> 6. Merge - apply your changes to the master branch using GitHub flow. You can ensure that only high-quality code ends up in the master branch. A solid foundation sets other team members up for success when they start making their changes.

<h3>6. Why should we protect the `master` branch?</h3>
<h4>My Answer</h4>

> The `master` branch should be protected, so that only the best quality code is pushed.

<h4>Book Answer</h4>

> You need to restrict push access to the `master` branch to enforce GitHub glow and prevent accidental pushed that can rewrite your Git history. In addition, if you implemented a *Continuous Deployment* (*CD*) pipeline, you could accidentally push unvetted code to a dev or prod server.
