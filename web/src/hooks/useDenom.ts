import { usdcIbcDenoms } from '../utils/constants';
import { getSelectedNetwork, useSelectedNetwork } from './useSelectedNetwork';

export const useUsdcDenom = () => {
  const selectedNetwork = useSelectedNetwork();
  return usdcIbcDenoms[selectedNetwork.id];
};

export const getUsdcDenom = () => {
  const selectedNetwork = getSelectedNetwork();
  return usdcIbcDenoms[selectedNetwork.id];
};
