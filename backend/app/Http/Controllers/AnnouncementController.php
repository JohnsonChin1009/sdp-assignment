<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use App\Models\ProjectManager;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AnnouncementController extends Controller
{
    public function getAnnouncements(Request $request)
    {
        $token = $request->header('Authorization');
        $token = str_replace('Bearer ', "", $token);

        if (!$token) {
            return response()->json([
                'success' => false,
                'message' => 'User token is not proper token!',
            ]);
        }
        
        $announcements = Announcement::where('show', 1)->get();

        return response()->json([
            'success' => true,
            'data' => $announcements,
        ]);
    }

    public function getAllAnnouncements(Request $request)
    {
        $token = $request->header('Authorization');
        $token = str_replace('Bearer ', "", $token);

        if (!$token) {
            return response()->json([
                'success' => false,
                'message' => 'User token is not proper token!',
            ]);
        }
        
        $announcements = Announcement::all();

        return response()->json([
            'success' => true,
            'data' => $announcements,
        ]);
    }

    public function updateAnnouncements(Request $request)
    {
        $token = $request->header('Authorization');
        $token = str_replace('Bearer ', "", $token);
        Log::info($token);

        $tokenValues = explode(',', $token);
        $id = $tokenValues[0];
        $newTitle = $tokenValues[1];
        log::info($newTitle);
        $newDescription = $tokenValues[2];
        $newName = $tokenValues[3];
        $newDate = $tokenValues[4];
        $newTime = $tokenValues[5];
        $newStatus = $tokenValues[6];

        $Announcement = Announcement::where('id', $id)->first();

        if (!$Announcement) {
            return response()->json([
                'success' => false,
                'message' => 'Announcement record not found',
            ]);
        }

        $Announcement->title = $newTitle;
        $Announcement->description = $newDescription;
        $Announcement->projectmanager = $newName;
        $Announcement->date = $newDate;
        $Announcement->time = $newTime;
        $Announcement->show = $newStatus;
        $Announcement->save();

        return response()->json([
            'success' => true,
            'message' => 'Updated Announcement Record Successfully!',
        ]);
    }

    public function addAnnouncements(Request $request)
    {

        $Announcement = new Announcement;
        $Announcement->title = $request->input('title');
        $Announcement->description = $request->input('description');
        $Announcement->projectmanager = $request->input('name');
        $Announcement->date = $request->input('date');
        $Announcement->time = $request->input('time');
        $Announcement->show = $request->input('show');
        $Announcement->save();
    

    
        return response()->json(['message' => 'Event added successfully']);
    }

    public function getSpecificAnnouncements(Request $request)
    {
        $token = $request->header('Authorization');
        $token = str_replace('Bearer ', "", $token);
        $announcements = Announcement::where('id', $token)->get();

        if (!$announcements) {
            return response()->json([
                'success' => false,
                'message' => 'No Announcement found!',
            ]);
        }

        return response()->json([
            'success' => true,
            'data' => $announcements,
        ]);
    }

    public function getIntakeCodes()
    {
        $intakeCodes = Student::distinct('intake_code')->pluck('intake_code')->toArray();

        return response()->json([
            'success' => true,
            'data' => $intakeCodes,
        ]);
    }
}


