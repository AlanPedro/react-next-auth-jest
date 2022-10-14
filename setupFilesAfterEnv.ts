// This is a hack to get our tests that use the jest-jsdom environment - working with jose package
// It expects TextEncoder/TextDecoder in the env but jsdom doesn't include
// So we do :))
import { TextEncoder, TextDecoder } from 'util';
import {jest} from '@jest/globals'
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;

// jest.mock("");
// jest.mock("@panva");