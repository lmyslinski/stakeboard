
import axios from "axios";
import { VALIDATOR_ADDR } from "./const";
import { CosmosTxResponse, ValidatorResponse } from "./types";

export const getValidators = async (): Promise<ValidatorResponse> => {
 const { data } = await axios.get(`${process.env.UNCHAINED_HOST}/api/v1/validators`)
 return data
}

// This call fails every now and then due to I/O timeouts on unchained. Instead of having a retry mechanism
// this is implicitly handled by the sync mechanism - on the first /sync call after a failure it simply picks up where it left off
export const getTx = async (cursor?: string): Promise<CosmosTxResponse> => {
    const { data } = await axios.get(
      `${process.env.UNCHAINED_HOST}/api/v1/validators/${VALIDATOR_ADDR}/txs`,
      { params: { cursor: cursor } }
    );
    return data;
  };