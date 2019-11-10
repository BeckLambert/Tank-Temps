# main.py -- put your code here!
# Import what is necessary to create a thread
import _thread
from time import sleep

# Increment index used to scan each point from vector sensors_data
def inc(index, vector):
    if index < len(vector)-1:
        return index+1
    else:
        return 0

# Define your thread's behaviour, here it's a loop sending sensors data every 5 seconds
def send_env_data():
    while True:
        v_out = get_voltage()
        v_in = calculate_v_in(v_out)
        temp = calculate_temp(v_in)
        pybytes.send_signal(1, temp)
        sleep(5)

# Start your thread
_thread.start_new_thread(send_env_data, ())

T_MAX = 220 #F
T_MIN = -30 #F
V_MAX = 10 #V
V_MIN = 0 #V
R1 = 10 # 10 kOhm
R2 = 2 # 2 kOhm

def get_voltage():
    return 1

def calculate_v_in (v_out):
    return v_out * (R1 + R2) / R2

def calculate_temp(v_in):
    return v_in * (T_MAX - T_MIN) / (V_MAX - V_MIN)