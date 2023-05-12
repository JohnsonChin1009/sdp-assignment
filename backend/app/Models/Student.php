<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Lecturer;

class Student extends Model
{
    protected $table = 'students';
    protected $primaryKey = 'tp_number';
    protected $keyType = 'string';
    public $timestamps = false;

    public function lecturer()
    {
        return $this->belongsTo(Lecturer::class, 'lecturer_id');
    }
    protected $fillable = [
        'tp_number',
        'name',
        'field_of_study',
        'specialism',
        'email',
        'title',
        'projectmanager',
        'supervisor',
        'secondmarker',
        'intake_code',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function supervisor()
    {
        return $this->belongsTo(Lecturer::class, 'supervisor_id');
    }

    public function secondMarker()
    {
        return $this->belongsTo(Lecturer::class, 'secondmarker_id');
    }
    
    public function getSupervisorNameAttribute()
    {
        return $this->supervisor ? $this->supervisor->name : null;
    }

    public function getSecondMarkerNameAttribute()
    {
        return $this->secondMarker ? $this->secondMarker->name : null;
    }
}