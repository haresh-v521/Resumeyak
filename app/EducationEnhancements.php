<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EducationEnhancements extends Model
{
    protected $table = 'kaun';
    protected $fillable = ['user_id', 'overallgpa',	'majorgpa',	'minor', 'credits_completed', 'academic_achievement',	'clubs_organization'];
}
