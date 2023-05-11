<?php

namespace App\Http\Controllers;

use App\Models\ProjectManager;
use Illuminate\Http\Request;

class PMController extends Controller
{
    // public function displayProjectManager()
    // {
    //     try {
    //         $projectmanagers = ProjectManager::all();

    //         return response()->json([
    //             'success' => true,
    //             'data' => $projectmanagers,
    //         ]);

    // } catch (\Exception $e) {
    //     return response()->json([
    //         'success' => false,
    //         'message' => 'Failed to fetch project manager records',
    //         'error' => $e->getMessage(),
    //     ], 500);
    // }
    // }
    public function displayProjectManagerProfile(Request $request)
        {
            $token = $request->header('Authorization');

            $projectmanager = ProjectManager::where('email', $token)->first();

            if(!$projectmanager) {
                return response()->json([
                    'success' => false,
                    'message' => $token,
                ], 401);
            }

            return response()->json([
                'success' => true,
                'data' => $projectmanager,
                ]);
            }
}
