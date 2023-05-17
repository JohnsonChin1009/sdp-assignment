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

Route::get('getAnnouncements', [AnnouncementController::class, 'getAnnouncements']);
Route::get('getAllAnnouncements', [AnnouncementController::class, 'getAllAnnouncements']);
Route::get('getSpecificAnnouncements', [AnnouncementController::class, 'getSpecificAnnouncements']);
Route::post('addAnnouncements', [AnnouncementController::class, 'addAnnouncements']);
Route::put('updateAnnouncements', [AnnouncementController::class, 'updateAnnouncements']);

Route::get('displaystudents', [StudentController::class, 'displayStudents']);
Route::get('displayStudentProfile', [StudentController::class, 'displayStudentProfile']);
Route::get('displayFieldStudent', [StudentController::class, 'displayFieldStudent']);
Route::get('displayStudentLec', [StudentController::class, 'displayStudentLec']);
Route::put('updatestutitle', [StudentController::class, 'updatestutitle']);
Route::get('displayStuPMProfile', [StudentController::class, 'displayStuPMProfile']);
Route::get('displayStuLecProfile', [StudentController::class, 'displayLecPMProfile']);
Route::get('displayStuResult', [StudentController::class, 'displayStuResult']);

Route::get('displayLecturers', [LecturerController::class, 'displayLecturers']);
Route::get('displayLecturerProfile', [LecturerController::class, 'displayLecturerProfile']);
Route::get('displaySupOwnStudents', [LecturerController::class, 'displaySupOwnStudents']);
Route::get('displaySecOwnStudents', [LecturerController::class, 'displaySecOwnStudents']);
Route::get('displayStudentSup', [LecturerController::class, 'displayStudentSup']);
Route::get('displayStudentSec', [LecturerController::class, 'displayStudentSec']);
Route::get('displayLecStuProfile', [LecturerController::class, 'displayLecStuProfile']);
Route::put('updateProgression', [LecturerController::class, 'updateProgression']);

Route::get('displayPMProfile', [PMController::class, 'displayPMProfile']);
Route::get('displayPMOwnStudents', [PMController::class, 'displayPMOwnStudents']);
Route::get('displayPMStudentProfile', [PMController::class, 'displayPMStudentProfile']);
Route::get('displayPMStaff', [PMController::class, 'displayPMStaff']);
Route::get('displayPMLecturerProfile', [PMController::class, 'displayPMLecturerProfile']);
Route::put('updateStudentInfo', [PMController::class, 'updateStudentInfo']);
Route::delete('deleteStuSup/{tp_number}', [PMController::class, 'deleteStuSup']);
Route::get('SearchPM', [PMController::class, 'SearchPM']);
Route::get('SearchStu', [PMController::class, 'SearchStu']);
Route::put('updatesturesult', [PMController::class, 'updatesturesult']);
Route::get('displayResult', [PMController::class, 'displayResult']);
Route::get('displayPMStuResult1', [PMController::class, 'displayPMStuResult1']);
Route::get('displayPMStuResult2', [PMController::class, 'displayPMStuResult2']);

Route::post('addSupSchedule', [EventController::class, 'addSupSchedule']);
Route::post('addPMSchedule', [EventController::class, 'addPMSchedule']);
Route::get('getPMSchedule', [EventController::class, 'getPMSchedule']);
Route::get('getStuPMSchedule', [EventController::class, 'getStuPMSchedule']);
Route::get('getLecSchedule', [EventController::class, 'getLecSchedule']);
Route::get('getStuLecSchedule', [EventController::class, 'getStuLecSchedule']);
Route::delete('deleteEvent/{id}', [EventController::class, 'deleteEvent']);


//User:PM at LecturerPage -> call Lecturer -> filter based on field_of_study -> when pressed on lecturer -> display assigned students
?>