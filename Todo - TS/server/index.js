"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var db_1 = require("./db");
var app = (0, express_1.default)();
//middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//routes
//creating a todo
app.post('/todos', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var description, newTodo, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                description = req.body.description;
                return [4 /*yield*/, db_1.pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *', [description])];
            case 1:
                newTodo = _a.sent();
                res.json(newTodo.rows[0]);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.log(err_1.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//getting a todo
app.get('/todos', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allTodos, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.pool.query('SELECT * FROM todo')];
            case 1:
                allTodos = _a.sent();
                res.json(allTodos.rows);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                console.log(err_2.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//getting a specific todo 
app.get('/todos/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, todo, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, db_1.pool.query('SELECT * FROM todo WHERE todo_id = $1', [id])];
            case 1:
                todo = _a.sent();
                console.log(todo.rows[0]);
                res.json(todo.rows[0]);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                console.log(err_3.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// updating a todo 
app.put('/todos/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, description, updateTodo, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                description = req.body.description;
                return [4 /*yield*/, db_1.pool.query('UPDATE todo SET description =$1 WHERE todo_id = $2', [description, id])];
            case 1:
                updateTodo = _a.sent();
                res.json('Todo was updated');
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                console.log(err_4.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//deleting a query 
app.delete('/todos/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deleteTodo, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, db_1.pool.query('DELETE FROM todo WHERE todo_id = $1', [id])];
            case 1:
                deleteTodo = _a.sent();
                res.json('Todo was deleted');
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                console.log(err_5.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.listen(5000, function () {
    console.log('Server has started on port 5000');
});
