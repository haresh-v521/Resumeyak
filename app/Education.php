<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $table = 'education';
    protected $fillable = [
    'user_id',
    'school',
    'school_id',
    'city',
    'state',
    'country',
    'degree',
    'major',
    'grad_month',
    'grad_year',
    'overallgpa',
    'majorgpa',
    'credits_completed'
    ];

}
