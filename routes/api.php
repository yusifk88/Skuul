<?php

use App\Http\Controllers\AuthController;
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
    Route::post('/school', [SchoolsController::class, 'store']);
    Route::post('/settings/{id}', [SchoolsController::class, 'updateSettings']);

});
