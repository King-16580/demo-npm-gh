#!/usr/bin/env python3
"""Demo Python script: add two numbers"""
import sys

def main():
    if len(sys.argv) < 3:
        print("用法: add.py <数字1> <数字2>")
        sys.exit(1)
    a = float(sys.argv[1])
    b = float(sys.argv[2])
    print(f"{a} + {b} = {a + b}")

if __name__ == "__main__":
    main()
