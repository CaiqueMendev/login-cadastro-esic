<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\CadastroController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('cadastro', [CadastroController::class,'index']);
Route::post('cadastro', [CadastroController::class,'index']);

Route::get('login', [LoginController::class,'index']);
Route::post('login', [LoginController::class,'index']);