<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GradesController;
use App\Http\Controllers\SchoolClassesController;
use App\Http\Controllers\SchoolsController;
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

    /**
     * Classes route
     */
    Route::post('/class', [SchoolClassesController::class, 'store']);
    Route::post('/class/{id}', [SchoolClassesController::class, 'update']);
    Route::get('/class/{id}', [SchoolClassesController::class, 'show']);
    Route::get('/classes', [SchoolClassesController::class, 'index']);


});
