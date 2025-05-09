# EventTickets

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10.

## Project Overview

EventTickets is a modular and scalable Angular application designed to manage event ticketing. The project adopts a **Domain-Driven Design (DDD)** architecture combined with **reactive programming principles** and a strong focus on **separation of responsibilities**. This approach ensures that the application is highly maintainable, reusable, and easy to extend.

---

## Why Modular and Scalable Architecture?

- **Independent**: Each domain (feature) is self-contained, reducing dependencies between modules.
- **Reusable**: Components, services, and logic can be reused across the application.
- **Maintainable**: Clear separation of concerns makes it easier to debug, test, and extend.
- **Scalable**: Adding new features or domains is straightforward without impacting existing functionality.

---

## Project Scaffolding

The project is organized into a modular structure based on domains. Below is the scaffolding schema:

```plaintext
src/
├── app/
│   ├── core/                     # Core module for global services and utilities
│   │   ├── services/             # Shared services (e.g., CartService)
│   │   ├── guards/               # Route guards
│   │   ├── interceptors/         # HTTP interceptors
│   │   ├── models/               # Global models and interfaces
│   │   ├── utils/                # Utility functions
│   │   └── core.module.ts        # Core module definition
│   ├── shared/                   # Shared module for reusable components, directives, and pipes
│   │   ├── components/           # Reusable UI components (e.g., ShoppingCartComponent)
│   │   ├── directives/           # Reusable directives
│   │   ├── pipes/                # Reusable pipes
│   │   └── shared.module.ts      # Shared module definition
│   ├── features/                 # Feature modules organized by domain
│   │   ├── events/               # Events domain
│   │   │   ├── components/       # Components specific to the events domain
│   │   │   ├── models/           # Models specific to the events domain
│   │   │   ├── pages/            # Page components (e.g., EventDetailComponent)
│   │   │   ├── services/         # Services specific to the events domain
│   │   │   └── events.module.ts  # Events module definition
│   │   └── other-feature/        # Placeholder for other feature modules
│   ├── app-routing.module.ts     # Application-wide routing configuration
│   └── app.module.ts             # Root module definition
├── assets/                       # Static assets (e.g., images, styles)
├── environments/                 # Environment-specific configurations
└── styles/                       # Global styles
```

---

## Key Architectural Decisions

1. **Domain-Driven Design (DDD)**:

   - The application is divided into **domains** (e.g., `events`), each representing a specific business area.
   - Each domain contains its own components, services, models, and logic, ensuring clear separation of concerns.

2. **Core Module**:

   - Contains global services, utilities, and configurations that are shared across the application.
   - Examples: `CartService`, route guards, interceptors.

3. **Shared Module**:

   - Contains reusable components, directives, and pipes that can be used across multiple domains.
   - Examples: `ShoppingCartComponent`, custom pipes, and directives.

4. **Reactive Programming**:

   - The application leverages **RxJS** for managing state and asynchronous operations.
   - Example: The `CartService` uses a `BehaviorSubject` to manage the cart state reactively.

5. **Separation of Responsibilities**:
   - Each module is responsible for its own functionality, reducing coupling and improving maintainability.
   - Example: The `events` domain handles all event-related logic, while the `shared` module provides reusable UI components.

---

## Styling Approach

The application follows a structured and scalable styling approach to ensure consistency and maintainability:

1. **Global Styles**:

   - Global styles are defined in the `src/styles/` folder and include:
     - `_variables.scss`: Contains reusable variables for colors, fonts, spacing, and layout dimensions.
     - `_layout.scss`: Defines global layout styles using **BEM methodology**.
     - `styles.scss`: Serves as the entry point for global styles, importing variables and layout styles.
   - These styles ensure a consistent design system across the application.

2. **BEM Methodology**:

   - The **Block-Element-Modifier (BEM)** methodology is used to structure CSS classes, ensuring styles are modular and reusable.
   - Example:
     - Block: `.app-layout`
     - Element: `.app-layout__content`
     - Modifier: `.app-layout--dark`

3. **Component/Page-Specific Styles**:

   - Each component or page has its own dedicated SCSS file for styles specific to that component or page.
   - This ensures that styles are encapsulated and do not leak into other parts of the application.

4. **Scalable and Maintainable**:
   - By separating global styles and component-specific styles, the application ensures:
     - **Consistency**: Global variables and layout styles provide a unified design system.
     - **Encapsulation**: Component-specific styles prevent unintended style conflicts.
     - **Scalability**: Adding new components or pages does not impact existing styles.

## Development Server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

---

## How to Extend the Application

1. **Add a New Domain**:

   - Create a new folder under `features/` (e.g., `features/orders`).
   - Add components, services, and models specific to the new domain.
   - Define a new module (e.g., `OrdersModule`) and configure routing for the domain.

2. **Add a Reusable Component**:

   - Create a new component under `shared/components/`.
   - Import the component into the `SharedModule` for use across the application.

3. **Add a Global Service**:
   - Create a new service under `core/services/`.
   - Provide the service in the `CoreModule` or root injector.

---

## How to Extend the Styling

1. **Add a New Global Variable**:

   - Define the variable in `_variables.scss` for reuse across the application.

2. **Add a New Component Style**:

   - Create a new SCSS file for the component (e.g., `my-component.component.scss`).
   - Use BEM methodology to structure the styles.

3. **Update Global Layout**:
   - Modify `_layout.scss` to add or update global layout styles.

---

## Conclusion

By adopting **Domain-Driven Design (DDD)** and **reactive programming principles**, the application is well-suited for growth and easy to maintain. Each module is self-contained, ensuring a clean separation of concerns and reducing dependencies.

Feel free to explore the codebase and reach out if you have any questions!
Thanks Silvia
