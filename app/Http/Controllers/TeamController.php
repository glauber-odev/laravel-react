<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Exception;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\TryCatch;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validated = $request->validate([
            'name' => 'required|string'
        ]);

        $validated['status'] = 'Ativo';
        Team::create($validated);

    }

    /**
     * Display the specified resource.
     */
    public function show(Team $team)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Team $team)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Team $team)
    {
        //
    }

    public function changestatus()
    {
        return 'Olá, seres humanos';
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Team $team)
    {
        //
    }

    public function modstatus(string $id)
    {
        $team2modify = Team::find($id);

        $status = $team2modify['status'] == 'Ativo' ? 'Inativo' : 'Ativo';

        $team2modify->update([
            'status' => $status
        ]);
    }
}
