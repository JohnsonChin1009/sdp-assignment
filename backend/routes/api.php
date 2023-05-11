<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LecturerController;
use App\Http\Controllers\StudentController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:api');
Route::get('displaystudents', [StudentController::class, 'displayStudents']);
Route::get('displayStudentProfile', [StudentController::class, 'displayStudentProfile']);
Route::get('displaylecturers', [LecturerController::class, 'displayLecturers']);
Route::get('displayLecturerProfile', [LecturerController::class, 'displayLecturerProfile'], );
Route::post('addSchedule', [LecturerController::class, 'addSchedule'], );