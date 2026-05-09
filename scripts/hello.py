#!/usr/bin/env python3
"""Demo Python script: greet someone"""
import sys

def main():
    if len(sys.argv) > 1:
        name = sys.argv[1]
    else:
        name = "World"
    print(f"Hello, {name}! 👋")
    print("Python 脚本执行成功！")

if __name__ == "__main__":
    main()
