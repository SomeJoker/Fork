#!/bin/bash
nohup npx hardhat node --hostname 0.0.0.0 --port 8546 > log_polygon.log 2>&1 &