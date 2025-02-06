<?php

use App\Http\Controllers\ChirpController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TeamController;
use App\Models\Team;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use PhpParser\Node\Expr\FuncCall;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'teams' => Team::all()
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('chirps', ChirpController::class)
    ->only(['index', 'store','update','destroy'])
    ->middleware(['auth', 'verified']);

Route::prefix('chirps')->group(function () {
            Route::get('teste', [ChirpController::class, 'teste']);
            Route::get('teste2', [ChirpController::class, 'teste2']);

        });

Route::resource('team', TeamController::class)
    ->only(['store']);
Route::put('/team/status/{id}', [TeamController::class, 'modstatus'])->name('team.modstatus');


require __DIR__.'/auth.php';
