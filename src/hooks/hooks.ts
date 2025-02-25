import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type {RootState, AppDispath} from '../stores/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispath>();