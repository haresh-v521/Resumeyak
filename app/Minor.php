<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Minor extends Model
{
    protected $table = 'minor';
    protected $fillable = [
        'education_id',	'minor', 'created_at', 'updated_at'	
    ];

}
