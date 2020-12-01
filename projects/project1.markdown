---
title: Project 1
---

<section class="codes">
{% highlight java linenos %}

    package com.example.proximitysensor;

    import androidx.annotation.RequiresApi;
    import androidx.appcompat.app.AppCompatActivity;
    import androidx.core.content.ContextCompat;

    import android.content.Context;
    import android.hardware.Sensor;
    import android.hardware.SensorEvent;
    import android.hardware.SensorEventListener;
    import android.hardware.SensorManager;
    import android.os.Build;
    import android.os.Bundle;
    import android.os.VibrationEffect;
    import android.os.Vibrator;
    import android.widget.TextView;
    import android.widget.Toast;

    public class MainActivity extends AppCompatActivity implements SensorEventListener {
        
        private SensorManager sensorManager;
        private Sensor proximitySensor;
        private boolean isProximitySensorAvailable;
        private Vibrator vibrator;
    
        public TextView textview;
    
    
        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_main);
    
            textview = findViewById(R.id.proximity_text);
    
            sensorManager = (SensorManager) getSystemService(Context.SENSOR_SERVICE);
            vibrator = (Vibrator) getSystemService(Context.VIBRATOR_SERVICE);
    
            //Check If Proximity Sensor is Available
            if (sensorManager.getDefaultSensor(Sensor.TYPE_PROXIMITY)  != null) {
                proximitySensor = sensorManager.getDefaultSensor(Sensor.TYPE_PROXIMITY);
                Toast.makeText(this, "proximity sensor is available", Toast.LENGTH_LONG).show();
                isProximitySensorAvailable = true;
            } else {
                Toast.makeText(this, "proximity sensor not available", Toast.LENGTH_LONG).show();
                isProximitySensorAvailable = false;
            }
        }
    
        @RequiresApi(api = Build.VERSION_CODES.O)
        @Override
        public void onSensorChanged(SensorEvent sensorEvent) {
            textview.setText(sensorEvent.values[0] + "cm");
    
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                vibrator.vibrate(VibrationEffect.createOneShot(500, VibrationEffect.DEFAULT_AMPLITUDE));
            } else {
                vibrator.vibrate(500);
            }
        }
    
        @Override
        public void onAccuracyChanged(Sensor sensor, int accuracy) {
    
        }
    
        @Override
        protected void onResume() {
            super.onResume();
            if (isProximitySensorAvailable) {
                sensorManager.registerListener(this, proximitySensor, SensorManager.SENSOR_DELAY_NORMAL);
            }
        }
    
        @Override
        protected void onPause() {
            super.onPause();
            if (isProximitySensorAvailable) {
                sensorManager.unregisterListener(this);
            }
        }
    
    }
{% endhighlight %}
</section>