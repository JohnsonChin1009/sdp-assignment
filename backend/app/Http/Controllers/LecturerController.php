<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lecturer;
use App\Models\schedule;

class LecturerController extends Controller
{
    public function displayLecturers()
    {
        try {
            $lecturers = Lecturer::all();

            return response()->json([
                'success' => true,
                'data' => $lecturers,
            ]);

    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Failed to fetch lecturer records',
            'error' => $e->getMessage(),
        ], 500);
    }
    }
    public function displayLecturerProfile(Request $request)
        {
            $token = $request->header('Authorization');

            $lecturer = lecturer::where('email', $token)->first();

            if(!$lecturer) {
                return response()->json([
                    'success' => false,
                    'message' => $token,
                ], 401);
            }

            return response()->json([
                'success' => true,
                'data' => $lecturer,
                ]);
            }


    public function addSchedule(Request $request)
        {
            // $token = $request->header("Authorization");

            // $lecturer = lecturer::where('email', $token)->first();

            $event = new Schedule;
            $event->meetingid = $request->input('title');
            $event->date = $request->input('start');
            $event->end = $request->input('end');
            // $event->id = $lecturer->('id');
            $event->save();
            
            return response()->json(['message' => 'Event added successfully']);
    }




    
}