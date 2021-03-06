import postApi from '../../../api/postApi';
import errorPopups from '../../../components/ui/ErrorMessage/in';
import { ActionsTypes, CommonThunkActionType, PostData } from '../../../types/types';

export const actionPublication = {
  setNewPublication: (publication: PostData) => ({ type: 'PUBLICATION/SET_PUBLICATION', publication } as const),
  deletePublication: () => ({ type: 'PUBLICATION/DELETE_PUBLICATION' } as const),
};

export const setPublication = (postId: number): ThunkType => async (dispatch) => {
  try {
    const response = await postApi.getPublication(postId);

    if (response.code === 200) {
      dispatch(actionPublication.setNewPublication(response.data));
    }
    errorPopups(response);
  } catch (error) {
    errorPopups(error.message);
  }
};

type ThunkType = CommonThunkActionType<ActionTypePublication>;
export type ActionTypePublication = ActionsTypes<typeof actionPublication>;
