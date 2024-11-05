<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AnimalController;

// api routes
// GROUP with api prefix
Route::prefix('api')->group(function () {
    Route::get('/beestje', [AnimalController::class, 'animalByHeight'])->name('animalByHeight');
});

Route::get('/', function () {
    return view('interface');
});
