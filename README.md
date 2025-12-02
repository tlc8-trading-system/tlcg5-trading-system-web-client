# Project README

A comprehensive overview of the web client of the trading platform project, its structure, purpose, and references to all technical documents created during the planning phase.


## 1. Overview

This project is a trading platform designed for traders, long-term investors, and brokers. It provides real-time market updates, portfolio management, order execution, customer management (admin), and exchange configuration.

The README gives a high-level guide to the project and links to all relevant planning and technical documents.


## 2. Project Goals

* Deliver a fast, reliable, real-time trading interface.
* Provide clean workflows for all user types.
* Support both user and admin functionality.
* Build with scalable, modular architecture.
* Ensure strong security and authentication.


## 3. References to Planning Documents

All planning documents referenced are part of the current planning stage.

### 3.1 Product & UX Documents
This [document](https://docs.google.com/document/d/1X3EUtdZFKfOR0U-NBOBxxNvBY1Ji-zISQoOLcvwdO5E/edit?usp=sharing) contains
* Personas, Scenarios, User Stories
* Information Architecture
* Frontend UX Workflow
* Interaction Design

### 3.2 Technical Planning Documents
This [document](https://docs.google.com/document/d/1qdCZPfYWb5S5AKjiACbw_KMTfypwRFyundzWv2VJuAo/edit?usp=sharing) contains
* Application Technical Requirements
* Frontend Architecture Decisions
* Technology Selection
* Security Decision
* Risks and Trade-Offs
* Proposed Structure Proposal
* Development Workflow
* Testing Strategy

### 3.3 Project Workflow Docs

* [Software Development Framework](https://docs.google.com/document/d/19BnYknkVHnAZ4chc2MlqICGTrBNa_SD4U_9pugbPEWI/edit?usp=sharing)
* [HCI Frontend Framework](https://docs.google.com/document/d/1vBII5DWL86t32y-O1Vtcll1tdCEyscgJkqnNdJNuOBU/edit?usp=sharing)


## 4. Project Modules (High Level)

### User Module

* Authentication
* Profiles
* Permissions

### Trading Module

* Order creation
* Order tracking (WebSockets)
* Order modification
* Portfolio updates

### Portfolio Module

* Create portfolio
* Close portfolio
* Generate performance reports

### Admin Module

* View/manage users
* View open orders
* Performance reports
* Exchange configuration


## 5. How to Get Started (Developer Guide)

### 1. Clone the repository

```
git clone <repo-url> group-5-web-client-trading-system
```

### 2. Install dependencies

```
cd group-5-web-client-trading-system && npm install
```


### 3. Start development servers

```
npm run dev
```


## 6. Contributing Guide

* Write tests before merging
* Follow branch naming conventions:
  `TSFP/General-Task`, `TSFP-<story-number>/Feature-Name`
* Submit PRs only after passing tests


## 7. License

To be determined.


This README will be updated as the project evolves and new planning documents are finalized.
