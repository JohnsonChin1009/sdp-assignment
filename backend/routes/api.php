<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LecturerController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\PMController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\AnnouncementController;

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

Route::get('getSpecificAnnouncements', [AnnouncementController::class, 'getSpecificAnnouncements']);
Route::get('getAllAnnouncements', [AnnouncementController::class, 'getAllAnnouncements']);
Route::post('addAnnouncements', [AnnouncementController::class, 'addAnnouncements']);
Route::put('updateAnnouncements', [AnnouncementController::class, 'updateAnnouncements']);

Route::get('displaystudents', [StudentController::class, 'displayStudents']);
Route::get('displayStudentProfile', [StudentController::class, 'displayStudentProfile']);
Route::get('displayFieldStudent', [StudentController::class, 'displayFieldStudent']);
Route::get('displayStudentLec', [StudentController::class, 'displayStudentLec']);
Route::put('updatestutitle', [StudentController::class, 'updatestutitle']);

Route::get('displayLecturers', [LecturerController::class, 'displayLecturers']);
Route::get('displayLecturerProfile', [LecturerController::class, 'displayLecturerProfile']);
Route::put('updateprofileLec', [LecturerController::class, 'updateprofileLec']);

Route::get('displayPMProfile', [PMController::class, 'displayPMProfile']);
Route::get('displayPMOwnStudents', [PMController::class, 'displayPMOwnStudents']);
Route::get('displayPMStudentProfile', [PMController::class, 'displayPMStudentProfile']);
Route::get('displayPMStaff', [PMController::class, 'displayPMStaff']);
Route::get('displayPMLecturerProfile', [PMController::class, 'displayPMLecturerProfile']);
Route::get('updateStudentInfo', [PMController::class, 'updateStudentInfo']);
Route::delete('deleteStuSup/{tp_number}', [PMController::class, 'deleteStuSup']);
Route::get('SearchPM', [PMController::class, 'SearchPM']);
Route::put('updateprofilePM', [PMController::class, 'updateprofilePM']);
Route::get('SearchStu', [PMController::class, 'SearchStu']);
Route::get('displayStuPMProfile', [PMController::class, 'displayStuPMProfile']);


Route::post('addSupSchedule', [EventController::class, 'addSupSchedule']);
Route::post('addPMSchedule', [EventController::class, 'addPMSchedule']);
Route::get('getPMSchedule', [EventController::class, 'getPMSchedule']);
Route::get('getLecSchedule', [EventController::class, 'getLecSchedule']);
Route::delete('deleteEvent/{id}', [EventController::class, 'deleteEvent']);


//User:PM at LecturerPage -> call Lecturer -> filter based on field_of_study -> when pressed on lecturer -> display assigned students
?>