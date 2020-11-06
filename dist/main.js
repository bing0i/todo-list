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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => /* binding */ Project\n/* harmony export */ });\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general */ \"./src/general.js\");\n\n\n\nconst Project = (t, d) => {\n    let _tilte = t;\n    let _dueDate = d;\n    let _todos = [];\n\n    const getTodo = (index) => {\n        return _todos[index];\n    };\n\n    const getTitle = () => {\n        return _tilte;\n    };\n\n    const getDueDate = () => {\n        return _dueDate;\n    };\n\n    const addTodo = (info) => {\n        let index = _general__WEBPACK_IMPORTED_MODULE_1__.general.getNullIndex(_todos);\n        _todos[index] = (0,_Todo__WEBPACK_IMPORTED_MODULE_0__.Todo)(info[0], info[1]);\n        return index;\n    };\n\n    const removeTodo = (tdId) => {\n        _todos[tdId] = null;\n    };\n\n    const addTodoItem = (tdId, info) => {\n        return _todos[tdId].addTodoItem(info);\n    };\n\n    const removeTodoItem = (tdId, tdiId) => {\n        _todos[tdId].removeTodoItem(tdiId);\n    };\n    \n    return {\n        getTodo,\n        getTitle,\n        getDueDate,\n        addTodo,\n        removeTodo,\n        addTodoItem,\n        removeTodoItem,\n    }\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/Project.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => /* binding */ Todo\n/* harmony export */ });\n/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoItem */ \"./src/TodoItem.js\");\n/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ \"./src/general.js\");\n\n\n\nconst Todo = (t, d) => {\n    let _tilte = t;\n    let _dueDate = d;\n    let _todoItems = [];\n\n    const getTodoItem = (index) => {\n        return _todoItems[index];\n    };\n\n    const getTodoItemsLength = () => {\n        return _todoItems.length;\n    };\n\n    const getTitle = () => {\n        return _tilte;\n    };\n\n    const getDueDate = () => {\n        return _dueDate;\n    };\n\n    const addTodoItem = (info) => {\n        let index = _general__WEBPACK_IMPORTED_MODULE_0__.general.getNullIndex(_todoItems);\n        _todoItems[index] = (0,_TodoItem__WEBPACK_IMPORTED_MODULE_1__.TodoItem)(info[0], info[1]);\n        return index;\n    };\n\n    const removeTodoItem = (tdiId) => {\n        _todoItems[tdiId] = null;\n    };\n    \n    return {\n        getTodoItem,\n        getTodoItemsLength,\n        getTitle,\n        getDueDate,\n        addTodoItem,\n        removeTodoItem,\n    }\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/Todo.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoItem\": () => /* binding */ TodoItem\n/* harmony export */ });\nconst TodoItem = (t, d) => {\n    let _tilte = t;\n    let _dueDate = d;\n\n    const getTitle = () => {\n        return _tilte;\n    };\n\n    const getDueDate = () => {\n        return _dueDate;\n    };\n    \n    return {\n        getTitle,\n        getDueDate,\n    }\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/TodoItem.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => /* binding */ dom\n/* harmony export */ });\n/* harmony import */ var _domProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domProject */ \"./src/domProject.js\");\n/* harmony import */ var _domTodoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domTodoItem */ \"./src/domTodoItem.js\");\n/* harmony import */ var _domModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domModal */ \"./src/domModal.js\");\n\n\n\n\nconst dom = (() => {\n\n    const init = () => {\n        _domProject__WEBPACK_IMPORTED_MODULE_0__.domProject.init();\n        _domTodoItem__WEBPACK_IMPORTED_MODULE_1__.domTodoItem.init();\n        _domModal__WEBPACK_IMPORTED_MODULE_2__.domModal.init();\n    };\n\n    return {\n        init,\n    }\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domModal\": () => /* binding */ domModal\n/* harmony export */ });\nconst domModal = (() => {\n    const init = () => {\n        attachEventsToggleForm();\n    };\n\n    const attachEventsToggleForm = () => {\n        const btnShowAddTodoItemForm = document.getElementById('showAddTodoItemForm');\n        btnShowAddTodoItemForm.addEventListener('click', () => {\n            if (document.getElementById('inpTextAddTodoItem').className === '')\n                return;\n                \n            toggleModal('visible', 'modalContentAddTodoItem', 'modalAddTodoItem');\n        });\n        const btnHideAddTodoItemForm = document.getElementById('closeAddTodoItemForm');\n        btnHideAddTodoItemForm.addEventListener('click', () => {\n            toggleModal('hidden', 'modalContentAddTodoItem', 'modalAddTodoItem');\n        });\n\n        const btnShowAddProjectForm = document.getElementById('showAddProjectForm');\n        btnShowAddProjectForm.addEventListener('click', () => {\n            toggleModal('visible', 'modalContentAddProject', 'modalAddProject');\n        });\n        const btnHideAddProjectForm = document.getElementById('closeAddProjectForm');\n        btnHideAddProjectForm.addEventListener('click', () => {\n            toggleModal('hidden', 'modalContentAddProject', 'modalAddProject');\n        });\n    };\n\n    const toggleModal = (value, idModalContent, idModal) => {\n        const modalContent = document.getElementById(idModalContent);\n        modalContent.style.visibility = value;\n        const modal = document.getElementById(idModal);\n        modal.style.visibility = value;\n    };\n\n    return {\n        init,\n        toggleModal,\n    }\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/domModal.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domProject\": () => /* binding */ domProject\n/* harmony export */ });\n/* harmony import */ var _domTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domTodo */ \"./src/domTodo.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _domModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domModal */ \"./src/domModal.js\");\n\n\n\n\nconst domProject = (() => {\n    const init = () => {\n        attachEventAddProject();\n    };\n\n    const attachEventAddProject = () => {\n        const btnAddProject = document.getElementById('btnAddProject');\n        btnAddProject.addEventListener('click', () => {\n            const inpTextAddProject = document.getElementById('inpTextAddProject');\n            if (inpTextAddProject.value === '')\n                return;\n            \n            let pjIndex = _projects__WEBPACK_IMPORTED_MODULE_1__.projects.addProject([inpTextAddProject.value, '45']);\n            addProject(inpTextAddProject.value, pjIndex);\n\n            inpTextAddProject.value = '';\n\n            _domModal__WEBPACK_IMPORTED_MODULE_2__.domModal.toggleModal('hidden', 'modalContentAddProject', 'modalAddProject');\n        });\n    };\n\n    const addProject = (pjName, pjId) => {\n        const project = document.createElement('div');\n        project.className = 'project';\n        project.id = 'divPj' + pjId;\n        project.addEventListener('click', () => {\n            toggleChosenProject(project);\n        });\n\n        const details = document.createElement('details');\n\n        const summary = document.createElement('summary');\n        summary.textContent = pjName;\n\n        const btnRemove = document.createElement('button');\n        btnRemove.className = 'removeItem';\n        btnRemove.id = 'btnPj' + pjId;\n        btnRemove.textContent = 'x';\n        btnRemove.addEventListener('click', () => {\n            removeProject(pjId);\n\n            _projects__WEBPACK_IMPORTED_MODULE_1__.projects.removeProject(pjId);\n        });\n\n        const input = document.createElement('input');\n        input.type = 'text';\n        input.id = 'inpPj' + pjId;\n\n        const btnAdd = document.createElement('button');\n        btnAdd.className = 'addItem';\n        btnAdd.textContent = '+';\n        btnAdd.id = 'btnTdPj' + pjId;\n        btnAdd.addEventListener('click', () => {\n            if (input.value === '')\n                return;\n                \n            let todoId = _projects__WEBPACK_IMPORTED_MODULE_1__.projects.addTodo(input.id.toString().slice(5), [inpTextAddTodoItem.value, '222']);\n\n            _domTodo__WEBPACK_IMPORTED_MODULE_0__.domTodo.addTodo(input.value, pjId, todoId);\n            input.value = '';\n        });\n\n        const divInpBtn = document.createElement('div');\n        divInpBtn.className = 'divInpBtn';\n        divInpBtn.appendChild(input);\n        divInpBtn.appendChild(btnAdd);\n\n        summary.appendChild(btnRemove);\n\n        details.appendChild(summary);\n        details.appendChild(divInpBtn);\n\n        project.appendChild(details);\n\n        const divProjects = document.getElementById('projects');\n        divProjects.appendChild(project);\n    };\n\n    const removeProject = (pjId) => {\n        const project = document.getElementById('divPj' + pjId);\n        const divProjects = document.getElementById('projects');\n        divProjects.removeChild(project);\n    };\n\n    const toggleChosenProject = (element) => {\n        if (element.tagName !== 'DIV')\n            element = element.parentNode;\n\n        if (element.classList.contains('chosenProject'))\n            return;\n        else {\n            addChosenProjectClass(element);\n            openOneDetailsOnly(element.firstChild);\n        }\n    };\n\n    const addChosenProjectClass = (project) => {\n        const todos = Array.from(document.querySelectorAll('.project'));\n        for (let i = 0; i < todos.length; ++i) {\n            if (todos[i].classList.contains('chosenProject'))\n                todos[i].className = todos[i].className.slice(0, todos[i].className.indexOf('chosenProject') - 1);\n        }\n        project.className += ' chosenProject';\n    };\n\n    const openOneDetailsOnly = (targetDetails) => {\n        const detailss = document.querySelectorAll('details');\n        detailss.forEach((details) => {\n            if (details !== targetDetails)\n                details.removeAttribute('open');\n        });\n    };\n\n    return {\n        init,\n    }\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/domProject.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domTodo\": () => /* binding */ domTodo\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _domTodoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domTodoItem */ \"./src/domTodoItem.js\");\n\n\n\n\nconst domTodo = (() => {\n    const init = () => {\n\n    };\n\n    const toggleChosenTodo = (element) => {\n        if (element.tagName !== 'DIV')\n            element = element.parentNode;\n\n        if (element.classList.contains('chosenTodo'))\n            return;\n        else {\n            const todos = Array.from(document.querySelectorAll('.todo'));\n            for (let i = 0; i < todos.length; ++i) {\n                if (todos[i].classList.contains('chosenTodo'))\n                    todos[i].className = todos[i].className.slice(0, todos[i].className.indexOf('chosenTodo') - 1);\n            }\n            element.className += ' chosenTodo';\n\n            let plus = String(element.id).indexOf('+');\n            let pjId = String(element.id).slice(5, plus);\n            let tdId = String(element.id).slice(plus + 6);\n            showTodoItems(pjId, tdId);\n        }\n    };\n\n    const showTodoItems = (pjId, tdId) => {\n        let todoItems = document.getElementById('todoItems');\n        if (todoItems.lastChild.id === 'items')\n            todoItems.removeChild(todoItems.lastChild);\n\n        let project = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.getProject(pjId);\n        let todo = project.getTodo(tdId);\n        for (let i = 0; i < todo.getTodoItemsLength(); ++i) {\n            _domTodoItem__WEBPACK_IMPORTED_MODULE_1__.domTodoItem.addTodoItem(\n                todo.getTodoItem(i).getTitle(), \n                pjId, \n                tdId,\n                i,\n            );\n        }\n    };\n\n    const addTodo = (todoName, pjId, tdId) => {\n        const div = document.createElement('div');\n        div.className = 'todo';\n        div.id = 'divPj' + pjId + '+divTd' + tdId;\n        div.addEventListener('click', () => {\n            const inpTextAddTodoItem = document.getElementById('inpTextAddTodoItem');\n            inpTextAddTodoItem.className = 'inpTdiPj' + pjId + '+' + 'inpTdiTd' + tdId;\n            \n            toggleChosenTodo(event.target);\n        });\n\n        const span = document.createElement('span');\n        span.textContent = todoName;\n        \n        const btnRemove = document.createElement('button');\n        btnRemove.className = 'removeItem';\n        btnRemove.textContent = 'x';\n        btnRemove.addEventListener('click', () => {\n            removeTodo(pjId, tdId);\n\n            _projects__WEBPACK_IMPORTED_MODULE_0__.projects.removeTodo(pjId, tdId);\n        });\n\n        span.appendChild(btnRemove);\n        div.appendChild(span);\n\n        const project = document.getElementById('divPj' + pjId);\n        const details = project.firstChild;\n        details.appendChild(div);\n    };\n\n    const removeTodo = (pjId, tdId) => {\n        const todo = document.getElementById('divPj' + pjId + '+divTd' + tdId);\n        const project = document.getElementById('divPj' + pjId);\n        const details = project.firstChild;\n        details.removeChild(todo);\n    };\n\n    return {\n        // init,\n        addTodo,\n    }\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/domTodo.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domTodoItem\": () => /* binding */ domTodoItem\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _domModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domModal */ \"./src/domModal.js\");\n\n\n\nconst domTodoItem = (() => {\n    const init = () => {\n        attachEventAddTodoItem();\n    };\n\n    const attachEventAddTodoItem = () => {\n        const btnAddTodoItem = document.getElementById('btnAddTodoItem');\n        btnAddTodoItem.addEventListener('click', () => {\n            const inpTextAddTodoItem = document.getElementById('inpTextAddTodoItem');\n            if (inpTextAddTodoItem.value === '')\n                return;\n\n            let plus = inpTextAddTodoItem.className.indexOf('+');\n            let pjId = inpTextAddTodoItem.className.slice(8, plus);\n            let tdId = inpTextAddTodoItem.className.slice(plus + 9); \n\n            let tdiId = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.addTodoItem(pjId, tdId, [inpTextAddTodoItem.value, 'asdd']);\n            addTodoItem(inpTextAddTodoItem.value, pjId, tdId, tdiId);\n\n            inpTextAddTodoItem.value = '';\n            _domModal__WEBPACK_IMPORTED_MODULE_1__.domModal.toggleModal('hidden', 'modalContentAddTodoItem', 'modalAddTodoItem');\n        });\n    };\n\n    const addTodoItem = (todoItemName, pjId, tdId, tdiId) => {\n        const todoItem = document.createElement('div');\n        todoItem.className = 'todoItem';\n        todoItem.id = 'divPj' + pjId + '+divTd' + tdId + '+divTdi' + tdiId;\n\n        const label = document.createElement('label');\n        label.className = 'title';\n        label.textContent = todoItemName\n\n        const input = document.createElement('input');\n        input.type = 'checkbox';\n\n        const btnRemove = document.createElement('button');\n        btnRemove.className = 'removeItem';\n        btnRemove.textContent = 'x';\n        btnRemove.addEventListener('click', () => {\n            removeTodoItem(pjId, tdId, tdiId);\n            _projects__WEBPACK_IMPORTED_MODULE_0__.projects.removeTodoItem(pjId, tdId, tdiId);\n        });\n\n        label.appendChild(input);\n        todoItem.appendChild(label);\n        todoItem.appendChild(btnRemove);\n\n        const divItems = document.getElementById('items');\n        if (divItems === null) {\n            const divItems = document.createElement('div');\n            divItems.id = 'items';\n            divItems.appendChild(todoItem);\n            \n            const todoItems = document.getElementById('todoItems');\n            todoItems.appendChild(divItems);\n        } else {\n            divItems.appendChild(todoItem);\n        }\n    };\n\n    const removeTodoItem = (pjId, tdId, tdiId) => {\n        const todoItem = document.getElementById('divPj' + pjId + '+divTd' + tdId + '+divTdi' + tdiId);\n        const todoItems = document.getElementById('todoItems');\n        todoItems.removeChild(todoItem);\n    };\n\n    return {\n        init,\n        addTodoItem,\n    }\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/domTodoItem.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"general\": () => /* binding */ general\n/* harmony export */ });\nconst general = (() => {\n    const getNullIndex = (array) => {\n        let index = array.indexOf(null);\n\n        if (index > -1) \n            return index;\n        else\n            return array.length;\n    };\n\n    return {\n        getNullIndex,\n    }\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/general.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n_dom__WEBPACK_IMPORTED_MODULE_0__.dom.init();\n\n// TODO: chosenTodoItems (have not saved checkbox state yet)\n// TODO: localStorage\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": () => /* binding */ projects\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general */ \"./src/general.js\");\n\n\n\nconst projects = (() => {\n    let _projects = [];\n\n    const getProject = (index) => {\n        return _projects[index];\n    };\n\n    const getProjectsLength = () => {\n        return _projects.length;\n    };\n\n    const addProject = (info) => {\n        let index = _general__WEBPACK_IMPORTED_MODULE_1__.general.getNullIndex(_projects);\n        _projects[index] = (0,_Project__WEBPACK_IMPORTED_MODULE_0__.Project)(info[0], info[1]);\n        return index;\n    };\n\n    const removeProject = (index) => {\n        _projects[index] = null;\n    };\n\n    const addTodo = (pjId, info) => {\n        return _projects[pjId].addTodo(info);\n    };\n\n    const removeTodo = (pjId, todoId) => {\n        _projects[pjId].removeTodo(todoId);\n    };\n\n    const addTodoItem = (pjId, tdId, info) => {\n        return _projects[pjId].addTodoItem(tdId, info);\n    };\n\n    const removeTodoItem = (pjId, tdId, tdiId) => {\n        _projects[pjId].removeTodoItem(tdId, tdiId);\n    };\n\n    return {\n        getProject,\n        getProjectsLength,\n        addProject,\n        removeProject,\n        addTodo,\n        removeTodo,\n        addTodoItem,\n        removeTodoItem,\n    }\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

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