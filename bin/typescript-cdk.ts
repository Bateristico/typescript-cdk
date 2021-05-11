#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { TypescriptCdkStack } from '../lib/typescript-cdk-stack';

const app = new cdk.App();
new TypescriptCdkStack(app, 'TypescriptCdkStack');
