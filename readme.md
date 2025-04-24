
# 🧪Proof of Concept (PoC)

  

**Author:** Diego Peralta
**Email:** peraltadie@paho.org
**Date:** April 20th, 2025
**Version:** 1.0.0


## 🎯 Objective

This proof of concept aims to **demonstrate the feasibility of** _implementing the MedDRA API in a mixed ecosystem with local databases_. The goal is to validate that _this environments can extract and modify information between these environments_ can be implemented using _Node JS, Express, Sequalize, and React_.  

## 🔍 Scope

-   ✔️ _Included_:
	- Basic implementation of the core functionality.
	- Local database implementation schema (DDL included)
	- MedDRA API Search implementation
	- Local tree generation for MedDRA Searched results
	- Basic front-end implementation
- ❌ _Not included_:
	- Security and authentication for gateway.
	- Scalability
	- Test scenarios

## ⚙️Technologies Used

-   Node.js / Express
    
-   PostgreSQL
    
-   Sequelize
    
-   React
  

## Requirements

  

- Node v18.15.0 or higher (Download from here: [link](https://nodejs.org/en/download/prebuilt-installer/current))
- React v17  or higher (More information here: [link](https://react.dev/learn))
  
## Instalation

### Back-end

1. Clone the github repository:
  
```bash
https://github.com/dpperalta/meddra-backend
```

2. Install requirired dependencies  

```
npm install
```

  

3. Run the aplication 

```
npm run dev
```

### Front-end

1. Clone the github repository:
  
```bash
https://github.com/dpperalta/meddra-frontend
```

2. Install requirired dependencies  

```
npm install
```

  

3. Run the aplication 

```
npm start
```