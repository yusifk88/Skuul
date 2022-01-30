<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GradesController;
use App\Http\Controllers\SchoolClassesController;
use App\Http\Controllers\SchoolsController;
use App\Http\Controllers\StudentsController;
use App\Http\Controllers\SubjectsController;
use App\Http\Controllers\TeacherController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/{type}/signup', [AuthController::class, 'signup']);


Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', [AuthController::class, 'user']);
    /**
     * school routes
     */
    Route::post('/school', [SchoolsController::class, 'store']);

    /**
     * settings routes
     */
    Route::post('/settings/{id}', [SchoolsController::class, 'updateSettings']);

    /**
     * grades route
     */

    Route::post('/grade', [GradesController::class, 'store']);
    Route::post('/grade/{id}', [GradesController::class, 'update']);
    Route::get('/grades', [GradesController::class, 'index']);
    Route::get('/grade/{id}', [GradesController::class, 'show']);
    Route::get('/grade/{id}/classes', [GradesController::class, 'classes']);

    /**
     * Classes route
     */
    Route::post('/class', [SchoolClassesController::class, 'store']);
    Route::post('/class/{id}', [SchoolClassesController::class, 'update']);
    Route::get('/class/{id}', [SchoolClassesController::class, 'show']);
    Route::get('/classes', [SchoolClassesController::class, 'index']);


    /**
     * Subjects routes
     */

    Route::post('/subject', [SubjectsController::class, 'store']);
    Route::post('/subject/{subject_id}', [SubjectsController::class, 'update']);
    Route::get('/subjects', [SubjectsController::class, 'index']);
    Route::get('/subjects/{id}', [SubjectsController::class, 'show']);

    /**
     * Students Route
     */

    Route::post('/student', [StudentsController::class, 'store']);
    Route::post('/student/{student_id}', [StudentsController::class, 'update']);
    Route::get('/students', [StudentsController::class, 'index']);
    Route::get('/students/{id}', [StudentsController::class, 'show']);

    /**
     * Teacher routes
     */

    Route::post('/teacher', [TeacherController::class, 'store']);
    Route::post('/teacher/{id}/assign/subject', [TeacherController::class, 'AssignSubjects']);
    Route::post('/teacher/{id}', [TeacherController::class, 'update']);
    Route::get('teachers', [TeacherController::class, 'index']);
    Route::get('teacher/{id}', [TeacherController::class, 'show']);
    Route::get('teacher/{id}/subject/assignments', [TeacherController::class, 'GetAssignments']);
    Route::delete('teacher/detach/subject/assignment/{id}',[TeacherController::class,'DetachAssignment']);


});

