<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/3/5
 * Time: 11:50
 */

namespace App\Http\Controllers;


use App\AdPlanModel;
use Illuminate\Http\Request;

class SpreadController extends Controller {

    public function getPlanList(Request $request){
        $startDate = $request->input('startDate');
        $endDate = $request->input('endDate');
        $searchKeyWord = $request->input('searchKeyWord');

        $condition = [];
        if (!empty($startDate)){
            $condition[] = ['create_time', '>=', $startDate];
        }
        if (!empty($endDate)){
            $condition[] = ['create_time', '<=', $endDate];
        }

        $adPlan = AdPlanModel::where($condition)
                    ->where(function ($query) use ($searchKeyWord){
                        if (!empty($searchKeyWord)){
                            $query->where('plan_name', 'like', '%'.$searchKeyWord.'%')
                                ->orWhere('plan_id', 'like', '%'.$searchKeyWord.'%');
                        }
                    })->paginate(10);
        return $adPlan->toArray();
    }
}