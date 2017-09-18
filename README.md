iCMS - Mobile Data Collection Platform

## Table of Contents

* [Application Structure](#application-structure)
* [Usage Documentation](docs/usage_documentation.md)

## Application Structure
In general the application is broken down into a modular structure by feature. In this way features can be added easily and existing features can be substituted, refactored, or removed.

* [API](#api)
* [Config](#config)
* [Sagas](#sagas)
* [State](#state)
* [Styles](#styles)
* [Views](#views)

### API
* Schemas
Schemas to be utilized with normalizr.
* Services
Different services associated with the API in modules to be easily adjusted and replaced.

### Config
Application configuration for the redux store as well as the React Native Router

### Sagas
Redux Saga, modularized into corresponding units as state and view.  

### State
State modules have the following folders:

* Actions
  Action creators, which call for a change in state with a type and a payload
* Operations
  Operations, which are exported as part of the public interface of the module can chain together actions(using a Saga) or simply export actions.
* Reducers
  The state and state shape for a given feature it controls the immutable state change based on given actions originating from the local actions folder or from a [Saga](#sagas), can be broken into numerous reducers.
* Selectors
  Along with Operations Selectors are part of the public interface of the module. Selectors are pure functions that are fed a piece of state and give back a piece of information in response to that state. They do not mutate the data, but merely access common pieces of data that may be used throughout the associated container or component
* Tests
  Testing suite for the module
* Types
  The type names for the associated actions. These are exported as other modules may need to respond to certain actions, in the case of a different module's reducer affected by a change or fire certain actions, in the case of a Saga that effects the module's reducer.
* Index
  The last piece is the index, which has named exports for the public interfaces as well as the types. The default export is the reducer, which allows the module to be easily accessed by the root reducer

### Styles
These are application level styles that can be imported to component level styles.  This includes various size, font, and spacing defaults that are useful throughout components.

### Views
Views have the following folders:

* Components
These are our presentational components that are fed data to render, they do not contain business logic, but merely render stylistic elements with information from the container
* Containers
These are our functional components.  They connect to state and are fed data and operations.  They may extrude or organize, but not mutate, data from state to be fed more conveniently to a component, but most access should take place in selectors to be called from the container. 
