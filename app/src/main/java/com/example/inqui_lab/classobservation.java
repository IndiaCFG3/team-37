package com.example.inqui_lab;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RatingBar;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.DefaultRetryPolicy;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

import static android.text.TextUtils.isEmpty;

public class classobservation extends Fragment {
    EditText rollno,teamno;
    RatingBar r1,r2;
    private RequestQueue requestQueue;
    JsonObjectRequest objectRequest;
    static final String key_teamno="teamNumber";
    static final String key_rollno="rollNumber";
    static final String key_leader="leadership";
    static final String key_mentor="mentorship";
    public String Leader;
    public String Mentor;
    public String rollnumber;
    public String teamnumber;


    JSONObject data;
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.activity_classobservation, container, false);
        rollno=view.findViewById(R.id.rollno);
        teamno=view.findViewById(R.id.teamno);
        r1=view.findViewById(R.id.leader);
        r2=view.findViewById(R.id.mentor);

        Button button=view.findViewById(R.id.button);
        requestQueue= Volley.newRequestQueue(getContext());
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                teamnumber = teamno.getText().toString().trim();
                rollnumber = rollno.getText().toString().trim();
              int  Leadership= (int) r1.getRating();
              int  Mentorship= (int) r2.getRating();
               Leader=String.valueOf(Leadership);
               Mentor=String.valueOf( Mentorship);



                if(isEmpty(rollnumber)||isEmpty(teamnumber)||isEmpty(Leader)||isEmpty(Mentor))
                {
                    Toast toast = Toast.makeText(getContext(),"Enter All Details", Toast.LENGTH_LONG);
                    toast.show();
                }
                else
                    userRegister();

            }
        }); return view;
    }
        public void userRegister() {
            String URL = "http://4ac6ea1b7bae.ngrok.io/classObs";
            data = new JSONObject();
            try {
                String s1="{\"rollNumber\" :" +rollnumber+","+
                     "\"teamNumber\":"+teamnumber+","+
                        "\"LeaderShip\":"+Leader+","+
                        "\"MentorShip\": "+Mentor+"}";
                data=new JSONObject(s1);
                System.out.println(data.toString());
            } catch (JSONException e) {
                e.printStackTrace();
            }
            requestQueue = Volley.newRequestQueue(getContext());
            objectRequest = new JsonObjectRequest(Request.Method.POST,
                    URL,
                    data,
                    new Response.Listener<JSONObject>() {
                        @Override
                        public void onResponse(JSONObject response) {
                            try {
                                Toast toast = Toast.makeText(getContext(), response.getString("message"), Toast.LENGTH_LONG);
                                toast.show();
                            } catch (JSONException e) {
                                e.printStackTrace();
                            }

                        }
                    },
                    new Response.ErrorListener() {
                        @Override
                        public void onErrorResponse(VolleyError error) {
                            Toast toast = Toast.makeText(getContext(), error.toString(), Toast.LENGTH_LONG);
                            toast.show();
                        }
                    })
                {
                    @Override
                    public String getBodyContentType() {
                    return "application/json";
                }
                @Override
                public Map<String, String> getHeaders() throws AuthFailureError {
                    Map<String, String> params = new HashMap<String, String>();
                    params.put("Content-Type", "application/json");
                    return params;
                }
            };
            objectRequest.setRetryPolicy(new DefaultRetryPolicy(
                    0,
                    DefaultRetryPolicy.DEFAULT_MAX_RETRIES,
                    DefaultRetryPolicy.DEFAULT_BACKOFF_MULT
            ));

            requestQueue.add(objectRequest);
        }



    }
