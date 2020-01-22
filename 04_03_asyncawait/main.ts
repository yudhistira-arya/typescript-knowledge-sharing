import {asyncAwaitDemo} from "./asyncAwaitDemo";
import {asyncFunctionSimulation, runner} from "./promiseandgeneratorequivalent";

asyncAwaitDemo();

// promise + generators equivalent
runner(asyncFunctionSimulation());
