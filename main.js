/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/*! namespace exports */
/*! export Project [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => /* binding */ Project\n/* harmony export */ });\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general */ \"./src/general.js\");\n\r\n\r\n\r\nconst Project = (t, d) => {\r\n    let _tilte = t;\r\n    let _dueDate = d;\r\n    let _todos = [];\r\n\r\n    const getTodo = (index) => {\r\n        return _todos[index];\r\n    };\r\n\r\n    const getTitle = () => {\r\n        return _tilte;\r\n    };\r\n\r\n    const getDueDate = () => {\r\n        return _dueDate;\r\n    };\r\n\r\n    const addTodo = (info) => {\r\n        let index = _general__WEBPACK_IMPORTED_MODULE_1__.general.getNullIndex(_todos);\r\n        _todos[index] = (0,_Todo__WEBPACK_IMPORTED_MODULE_0__.Todo)(info[0], info[1]);\r\n        return index;\r\n    };\r\n\r\n    const removeTodo = (tdId) => {\r\n        _todos[tdId] = null;\r\n    };\r\n\r\n    const addTodoItem = (tdId, info) => {\r\n        return _todos[tdId].addTodoItem(info);\r\n    };\r\n\r\n    const removeTodoItem = (tdId, tdiId) => {\r\n        _todos[tdId].removeTodoItem(tdiId);\r\n    };\r\n    \r\n    return {\r\n        getTodo,\r\n        getTitle,\r\n        getDueDate,\r\n        addTodo,\r\n        removeTodo,\r\n        addTodoItem,\r\n        removeTodoItem,\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/Project.js?");

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/*! namespace exports */
/*! export Todo [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => /* binding */ Todo\n/* harmony export */ });\n/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoItem */ \"./src/TodoItem.js\");\n/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ \"./src/general.js\");\n\r\n\r\n\r\nconst Todo = (t, d) => {\r\n    let _tilte = t;\r\n    let _dueDate = d;\r\n    let _todoItems = [];\r\n\r\n    const getTodoItem = (index) => {\r\n        return _todoItems[index];\r\n    };\r\n\r\n    const getTodoItemsLength = () => {\r\n        return _todoItems.length;\r\n    };\r\n\r\n    const getTitle = () => {\r\n        return _tilte;\r\n    };\r\n\r\n    const getDueDate = () => {\r\n        return _dueDate;\r\n    };\r\n\r\n    const addTodoItem = (info) => {\r\n        let index = _general__WEBPACK_IMPORTED_MODULE_0__.general.getNullIndex(_todoItems);\r\n        _todoItems[index] = (0,_TodoItem__WEBPACK_IMPORTED_MODULE_1__.TodoItem)(info[0], info[1]);\r\n        return index;\r\n    };\r\n\r\n    const removeTodoItem = (tdiId) => {\r\n        _todoItems[tdiId] = null;\r\n    };\r\n    \r\n    return {\r\n        getTodoItem,\r\n        getTodoItemsLength,\r\n        getTitle,\r\n        getDueDate,\r\n        addTodoItem,\r\n        removeTodoItem,\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/Todo.js?");

/***/ }),

/***/ "./src/TodoItem.js":
/*!*************************!*\
  !*** ./src/TodoItem.js ***!
  \*************************/
/*! namespace exports */
/*! export TodoItem [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoItem\": () => /* binding */ TodoItem\n/* harmony export */ });\nconst TodoItem = (t, d) => {\r\n    let _tilte = t;\r\n    let _dueDate = d;\r\n\r\n    const getTitle = () => {\r\n        return _tilte;\r\n    };\r\n\r\n    const getDueDate = () => {\r\n        return _dueDate;\r\n    };\r\n    \r\n    return {\r\n        getTitle,\r\n        getDueDate,\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/TodoItem.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! namespace exports */
/*! export dom [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => /* binding */ dom\n/* harmony export */ });\n/* harmony import */ var _domProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domProject */ \"./src/domProject.js\");\n/* harmony import */ var _domTodoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domTodoItem */ \"./src/domTodoItem.js\");\n/* harmony import */ var _domModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domModal */ \"./src/domModal.js\");\n\r\n\r\n\r\n\r\nconst dom = (() => {\r\n\r\n    const init = () => {\r\n        _domProject__WEBPACK_IMPORTED_MODULE_0__.domProject.init();\r\n        _domTodoItem__WEBPACK_IMPORTED_MODULE_1__.domTodoItem.init();\r\n        _domModal__WEBPACK_IMPORTED_MODULE_2__.domModal.init();\r\n    };\r\n\r\n    return {\r\n        init,\r\n    }\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/domModal.js":
/*!*************************!*\
  !*** ./src/domModal.js ***!
  \*************************/
/*! namespace exports */
/*! export domModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domModal\": () => /* binding */ domModal\n/* harmony export */ });\nconst domModal = (() => {\r\n    const init = () => {\r\n        attachEventsToggleForm();\r\n    };\r\n\r\n    const attachEventsToggleForm = () => {\r\n        const btnShowAddTodoItemForm = document.getElementById('showAddTodoItemForm');\r\n        btnShowAddTodoItemForm.addEventListener('click', () => {\r\n            if (document.getElementById('inpTextAddTodoItem').className === '')\r\n                return;\r\n                \r\n            toggleModal('visible', 'modalContentAddTodoItem', 'modalAddTodoItem');\r\n        });\r\n        const btnHideAddTodoItemForm = document.getElementById('closeAddTodoItemForm');\r\n        btnHideAddTodoItemForm.addEventListener('click', () => {\r\n            toggleModal('hidden', 'modalContentAddTodoItem', 'modalAddTodoItem');\r\n        });\r\n\r\n        const btnShowAddProjectForm = document.getElementById('showAddProjectForm');\r\n        btnShowAddProjectForm.addEventListener('click', () => {\r\n            toggleModal('visible', 'modalContentAddProject', 'modalAddProject');\r\n        });\r\n        const btnHideAddProjectForm = document.getElementById('closeAddProjectForm');\r\n        btnHideAddProjectForm.addEventListener('click', () => {\r\n            toggleModal('hidden', 'modalContentAddProject', 'modalAddProject');\r\n        });\r\n    };\r\n\r\n    const toggleModal = (value, idModalContent, idModal) => {\r\n        const modalContent = document.getElementById(idModalContent);\r\n        modalContent.style.visibility = value;\r\n        const modal = document.getElementById(idModal);\r\n        modal.style.visibility = value;\r\n    };\r\n\r\n    return {\r\n        init,\r\n        toggleModal,\r\n    }\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/domModal.js?");

/***/ }),

/***/ "./src/domProject.js":
/*!***************************!*\
  !*** ./src/domProject.js ***!
  \***************************/
/*! namespace exports */
/*! export domProject [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domProject\": () => /* binding */ domProject\n/* harmony export */ });\n/* harmony import */ var _domTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domTodo */ \"./src/domTodo.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _domModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domModal */ \"./src/domModal.js\");\n\r\n\r\n\r\n\r\nconst domProject = (() => {\r\n    const init = () => {\r\n        attachEventAddProject();\r\n    };\r\n\r\n    const attachEventAddProject = () => {\r\n        const btnAddProject = document.getElementById('btnAddProject');\r\n        btnAddProject.addEventListener('click', () => {\r\n            const inpTextAddProject = document.getElementById('inpTextAddProject');\r\n            if (inpTextAddProject.value === '')\r\n                return;\r\n            \r\n            let pjIndex = _projects__WEBPACK_IMPORTED_MODULE_1__.projects.addProject([inpTextAddProject.value, '45']);\r\n            addProject(inpTextAddProject.value, pjIndex);\r\n\r\n            inpTextAddProject.value = '';\r\n\r\n            _domModal__WEBPACK_IMPORTED_MODULE_2__.domModal.toggleModal('hidden', 'modalContentAddProject', 'modalAddProject');\r\n        });\r\n    };\r\n\r\n    const addProject = (pjName, pjId) => {\r\n        const project = document.createElement('div');\r\n        project.className = 'project';\r\n        project.id = 'divPj' + pjId;\r\n        project.addEventListener('click', () => {\r\n            toggleChosenProject(project);\r\n        });\r\n\r\n        const details = document.createElement('details');\r\n\r\n        const summary = document.createElement('summary');\r\n        summary.textContent = pjName;\r\n\r\n        const btnRemove = document.createElement('button');\r\n        btnRemove.className = 'removeItem';\r\n        btnRemove.id = 'btnPj' + pjId;\r\n        btnRemove.textContent = 'x';\r\n        btnRemove.addEventListener('click', () => {\r\n            removeProject(pjId);\r\n\r\n            _projects__WEBPACK_IMPORTED_MODULE_1__.projects.removeProject(pjId);\r\n        });\r\n\r\n        const input = document.createElement('input');\r\n        input.type = 'text';\r\n        input.id = 'inpPj' + pjId;\r\n\r\n        const btnAdd = document.createElement('button');\r\n        btnAdd.className = 'addItem';\r\n        btnAdd.textContent = '+';\r\n        btnAdd.id = 'btnTdPj' + pjId;\r\n        btnAdd.addEventListener('click', () => {\r\n            if (input.value === '')\r\n                return;\r\n                \r\n            let todoId = _projects__WEBPACK_IMPORTED_MODULE_1__.projects.addTodo(input.id.toString().slice(5), [inpTextAddTodoItem.value, '222']);\r\n\r\n            _domTodo__WEBPACK_IMPORTED_MODULE_0__.domTodo.addTodo(input.value, pjId, todoId);\r\n            input.value = '';\r\n        });\r\n\r\n        const divInpBtn = document.createElement('div');\r\n        divInpBtn.className = 'divInpBtn';\r\n        divInpBtn.appendChild(input);\r\n        divInpBtn.appendChild(btnAdd);\r\n\r\n        summary.appendChild(btnRemove);\r\n\r\n        details.appendChild(summary);\r\n        details.appendChild(divInpBtn);\r\n\r\n        project.appendChild(details);\r\n\r\n        const divProjects = document.getElementById('projects');\r\n        divProjects.appendChild(project);\r\n    };\r\n\r\n    const removeProject = (pjId) => {\r\n        const project = document.getElementById('divPj' + pjId);\r\n        const divProjects = document.getElementById('projects');\r\n        divProjects.removeChild(project);\r\n    };\r\n\r\n    const toggleChosenProject = (element) => {\r\n        if (element.tagName !== 'DIV')\r\n            element = element.parentNode;\r\n\r\n        if (element.classList.contains('chosenProject'))\r\n            return;\r\n        else {\r\n            addChosenProjectClass(element);\r\n            openOneDetailsOnly(element.firstChild);\r\n        }\r\n    };\r\n\r\n    const addChosenProjectClass = (project) => {\r\n        const todos = Array.from(document.querySelectorAll('.project'));\r\n        for (let i = 0; i < todos.length; ++i) {\r\n            if (todos[i].classList.contains('chosenProject'))\r\n                todos[i].className = todos[i].className.slice(0, todos[i].className.indexOf('chosenProject') - 1);\r\n        }\r\n        project.className += ' chosenProject';\r\n    };\r\n\r\n    const openOneDetailsOnly = (targetDetails) => {\r\n        const detailss = document.querySelectorAll('details');\r\n        detailss.forEach((details) => {\r\n            if (details !== targetDetails)\r\n                details.removeAttribute('open');\r\n        });\r\n    };\r\n\r\n    return {\r\n        init,\r\n    }\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/domProject.js?");

/***/ }),

/***/ "./src/domTodo.js":
/*!************************!*\
  !*** ./src/domTodo.js ***!
  \************************/
/*! namespace exports */
/*! export domTodo [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domTodo\": () => /* binding */ domTodo\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _domTodoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domTodoItem */ \"./src/domTodoItem.js\");\n\r\n\r\n\r\n\r\nconst domTodo = (() => {\r\n    const init = () => {\r\n\r\n    };\r\n\r\n    const toggleChosenTodo = (element) => {\r\n        if (element.tagName !== 'DIV')\r\n            element = element.parentNode;\r\n\r\n        if (element.classList.contains('chosenTodo'))\r\n            return;\r\n        else {\r\n            const todos = Array.from(document.querySelectorAll('.todo'));\r\n            for (let i = 0; i < todos.length; ++i) {\r\n                if (todos[i].classList.contains('chosenTodo'))\r\n                    todos[i].className = todos[i].className.slice(0, todos[i].className.indexOf('chosenTodo') - 1);\r\n            }\r\n            element.className += ' chosenTodo';\r\n\r\n            let plus = String(element.id).indexOf('+');\r\n            let pjId = String(element.id).slice(5, plus);\r\n            let tdId = String(element.id).slice(plus + 6);\r\n            showTodoItems(pjId, tdId);\r\n        }\r\n    };\r\n\r\n    const showTodoItems = (pjId, tdId) => {\r\n        let todoItems = document.getElementById('todoItems');\r\n        if (todoItems.lastChild.id === 'items')\r\n            todoItems.removeChild(todoItems.lastChild);\r\n\r\n        let project = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.getProject(pjId);\r\n        let todo = project.getTodo(tdId);\r\n        for (let i = 0; i < todo.getTodoItemsLength(); ++i) {\r\n            _domTodoItem__WEBPACK_IMPORTED_MODULE_1__.domTodoItem.addTodoItem(\r\n                todo.getTodoItem(i).getTitle(), \r\n                pjId, \r\n                tdId,\r\n                i,\r\n            );\r\n        }\r\n    };\r\n\r\n    const addTodo = (todoName, pjId, tdId) => {\r\n        const div = document.createElement('div');\r\n        div.className = 'todo';\r\n        div.id = 'divPj' + pjId + '+divTd' + tdId;\r\n        div.addEventListener('click', () => {\r\n            const inpTextAddTodoItem = document.getElementById('inpTextAddTodoItem');\r\n            inpTextAddTodoItem.className = 'inpTdiPj' + pjId + '+' + 'inpTdiTd' + tdId;\r\n            \r\n            toggleChosenTodo(event.target);\r\n        });\r\n\r\n        const span = document.createElement('span');\r\n        span.textContent = todoName;\r\n        \r\n        const btnRemove = document.createElement('button');\r\n        btnRemove.className = 'removeItem';\r\n        btnRemove.textContent = 'x';\r\n        btnRemove.addEventListener('click', () => {\r\n            removeTodo(pjId, tdId);\r\n\r\n            _projects__WEBPACK_IMPORTED_MODULE_0__.projects.removeTodo(pjId, tdId);\r\n        });\r\n\r\n        span.appendChild(btnRemove);\r\n        div.appendChild(span);\r\n\r\n        const project = document.getElementById('divPj' + pjId);\r\n        const details = project.firstChild;\r\n        details.appendChild(div);\r\n    };\r\n\r\n    const removeTodo = (pjId, tdId) => {\r\n        const todo = document.getElementById('divPj' + pjId + '+divTd' + tdId);\r\n        const project = document.getElementById('divPj' + pjId);\r\n        const details = project.firstChild;\r\n        details.removeChild(todo);\r\n    };\r\n\r\n    return {\r\n        // init,\r\n        addTodo,\r\n    }\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/domTodo.js?");

/***/ }),

/***/ "./src/domTodoItem.js":
/*!****************************!*\
  !*** ./src/domTodoItem.js ***!
  \****************************/
/*! namespace exports */
/*! export domTodoItem [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domTodoItem\": () => /* binding */ domTodoItem\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _domModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domModal */ \"./src/domModal.js\");\n\r\n\r\n\r\nconst domTodoItem = (() => {\r\n    const init = () => {\r\n        attachEventAddTodoItem();\r\n    };\r\n\r\n    const attachEventAddTodoItem = () => {\r\n        const btnAddTodoItem = document.getElementById('btnAddTodoItem');\r\n        btnAddTodoItem.addEventListener('click', () => {\r\n            const inpTextAddTodoItem = document.getElementById('inpTextAddTodoItem');\r\n            if (inpTextAddTodoItem.value === '')\r\n                return;\r\n\r\n            let plus = inpTextAddTodoItem.className.indexOf('+');\r\n            let pjId = inpTextAddTodoItem.className.slice(8, plus);\r\n            let tdId = inpTextAddTodoItem.className.slice(plus + 9); \r\n\r\n            let tdiId = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.addTodoItem(pjId, tdId, [inpTextAddTodoItem.value, 'asdd']);\r\n            addTodoItem(inpTextAddTodoItem.value, pjId, tdId, tdiId);\r\n\r\n            inpTextAddTodoItem.value = '';\r\n            _domModal__WEBPACK_IMPORTED_MODULE_1__.domModal.toggleModal('hidden', 'modalContentAddTodoItem', 'modalAddTodoItem');\r\n        });\r\n    };\r\n\r\n    const addTodoItem = (todoItemName, pjId, tdId, tdiId) => {\r\n        const todoItem = document.createElement('div');\r\n        todoItem.className = 'todoItem';\r\n        todoItem.id = 'divPj' + pjId + '+divTd' + tdId + '+divTdi' + tdiId;\r\n\r\n        const label = document.createElement('label');\r\n        label.className = 'title';\r\n        label.textContent = todoItemName\r\n\r\n        const input = document.createElement('input');\r\n        input.type = 'checkbox';\r\n\r\n        const btnRemove = document.createElement('button');\r\n        btnRemove.className = 'removeItem';\r\n        btnRemove.textContent = 'x';\r\n        btnRemove.addEventListener('click', () => {\r\n            removeTodoItem(pjId, tdId, tdiId);\r\n            _projects__WEBPACK_IMPORTED_MODULE_0__.projects.removeTodoItem(pjId, tdId, tdiId);\r\n        });\r\n\r\n        label.appendChild(input);\r\n        todoItem.appendChild(label);\r\n        todoItem.appendChild(btnRemove);\r\n\r\n        const divItems = document.getElementById('items');\r\n        if (divItems === null) {\r\n            const divItems = document.createElement('div');\r\n            divItems.id = 'items';\r\n            divItems.appendChild(todoItem);\r\n            \r\n            const todoItems = document.getElementById('todoItems');\r\n            todoItems.appendChild(divItems);\r\n        } else {\r\n            divItems.appendChild(todoItem);\r\n        }\r\n    };\r\n\r\n    const removeTodoItem = (pjId, tdId, tdiId) => {\r\n        const todoItem = document.getElementById('divPj' + pjId + '+divTd' + tdId + '+divTdi' + tdiId);\r\n        const todoItems = document.getElementById('todoItems');\r\n        todoItems.removeChild(todoItem);\r\n    };\r\n\r\n    return {\r\n        init,\r\n        addTodoItem,\r\n    }\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/domTodoItem.js?");

/***/ }),

/***/ "./src/general.js":
/*!************************!*\
  !*** ./src/general.js ***!
  \************************/
/*! namespace exports */
/*! export general [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"general\": () => /* binding */ general\n/* harmony export */ });\nconst general = (() => {\r\n    const getNullIndex = (array) => {\r\n        let index = array.indexOf(null);\r\n\r\n        if (index > -1) \r\n            return index;\r\n        else\r\n            return array.length;\r\n    };\r\n\r\n    return {\r\n        getNullIndex,\r\n    }\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/general.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\r\n\r\n_dom__WEBPACK_IMPORTED_MODULE_0__.dom.init();\r\n// TODO: chosenTodoItems (have not saved checkbox state yet)\r\n// TODO: localStorage\r\n\r\n//Below is to create sample projects\r\nconst addSampleProjectsTodos = (pjName, pjId, tdName) => {\r\n    const btnShowAddProjectForm = document.getElementById('showAddProjectForm');\r\n    btnShowAddProjectForm.click();\r\n    const inpTextAddProject = document.getElementById('inpTextAddProject');\r\n    inpTextAddProject.value = pjName;\r\n    const btnAddProject = document.getElementById('btnAddProject');\r\n    btnAddProject.click();\r\n    const inpPj = document.getElementById('inpPj' + pjId);\r\n    for (let i = 0; i < tdName.length; ++i) {\r\n        inpPj.value = tdName[i];\r\n        const btnTdPj = document.getElementById('btnTdPj' + pjId);\r\n        btnTdPj.click();\r\n    }\r\n}\r\n\r\nconst addSampleTodoItems = (tdiName, pjId, tdId) => {\r\n    const divPjdivTd = document.getElementById('divPj' + pjId + '+divTd' + tdId);\r\n    divPjdivTd.click();\r\n    const btnShowAddTodoItemForm = document.getElementById('showAddTodoItemForm');\r\n    const inpTextAddTodoItem = document.getElementById('inpTextAddTodoItem');\r\n    const btnAddTodoItem = document.getElementById('btnAddTodoItem');\r\n    for (let i = 0; i < tdiName.length; ++i) {\r\n        btnShowAddTodoItemForm.click();\r\n        inpTextAddTodoItem.value = tdiName[i];\r\n        btnAddTodoItem.click();\r\n    }\r\n}\r\n\r\naddSampleProjectsTodos(\r\n    'Helloooo', \r\n    0, \r\n    ['How are you?', 'Nice to meet you'],\r\n);\r\naddSampleProjectsTodos(\r\n    'Hii, again', \r\n    1, \r\n    ['What would you like to do?', 'Let\\'s add something', 'By clicking \\'+\\' buttons', 'Delete something with \\'x\\' buttons'],\r\n);\r\naddSampleTodoItems(\r\n    ['Take a coffee', 'Eat Phoooooooooo'],\r\n    1, \r\n    0,\r\n);\r\naddSampleTodoItems(\r\n    ['Doing welllllll', 'Soooooooooo tired'],\r\n    0, \r\n    0,\r\n);\r\naddSampleTodoItems(\r\n    ['Hope you will have a great day!', 'Yay', 'Yayyyyyy'],\r\n    0, \r\n    1,\r\n);\r\nconst clickOnSampleProject = (() => {\r\n    const divFirstProject = document.getElementById('divPj1');\r\n    const details = divFirstProject.firstChild;\r\n    details.open = true;\r\n    const divPj1divTd0 = document.getElementById('divPj1+divTd0');\r\n    divPj1divTd0.click();\r\n})();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/*! namespace exports */
/*! export projects [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": () => /* binding */ projects\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general */ \"./src/general.js\");\n\r\n\r\n\r\nconst projects = (() => {\r\n    let _projects = [];\r\n\r\n    const getProject = (index) => {\r\n        return _projects[index];\r\n    };\r\n\r\n    const getProjectsLength = () => {\r\n        return _projects.length;\r\n    };\r\n\r\n    const addProject = (info) => {\r\n        let index = _general__WEBPACK_IMPORTED_MODULE_1__.general.getNullIndex(_projects);\r\n        _projects[index] = (0,_Project__WEBPACK_IMPORTED_MODULE_0__.Project)(info[0], info[1]);\r\n        return index;\r\n    };\r\n\r\n    const removeProject = (index) => {\r\n        _projects[index] = null;\r\n    };\r\n\r\n    const addTodo = (pjId, info) => {\r\n        return _projects[pjId].addTodo(info);\r\n    };\r\n\r\n    const removeTodo = (pjId, todoId) => {\r\n        _projects[pjId].removeTodo(todoId);\r\n    };\r\n\r\n    const addTodoItem = (pjId, tdId, info) => {\r\n        return _projects[pjId].addTodoItem(tdId, info);\r\n    };\r\n\r\n    const removeTodoItem = (pjId, tdId, tdiId) => {\r\n        _projects[pjId].removeTodoItem(tdId, tdiId);\r\n    };\r\n\r\n    return {\r\n        getProject,\r\n        getProjectsLength,\r\n        addProject,\r\n        removeProject,\r\n        addTodo,\r\n        removeTodo,\r\n        addTodoItem,\r\n        removeTodoItem,\r\n    }\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;