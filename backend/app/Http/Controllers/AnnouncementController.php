<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use Illuminate\Http\Request;

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
}
