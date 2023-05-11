<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $table = 'students';
    protected $primaryKey = 'tp_number';
    protected $keyType = 'string';
    
    protected $fillable = [
        'tp_number',
        'name',
        'field_of_study',
        'specialism',
        'email',
        'title',
        'projectmanager',
        'supervisor',
        'secondmarker'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}