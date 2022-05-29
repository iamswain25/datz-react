import { useNotice } from "../store/useGlobalState";
const originalHeight = 79;
export default function useNavTopHeight() {
  const [notice] = useNotice();
  const navTopHeight = !!notice ? originalHeight + 50 : originalHeight;
  // console.log({ isNoticeOn, navTopHeight });
  const desktopHeight = `calc(100vh - ${navTopHeight}px)`;
  const desktopHeight16 = `calc(100vh - ${navTopHeight}px - 16px)`;
  const desktopHeight36 = `calc(100vh - ${navTopHeight}px - 36px)`;
  const desktopHeight37 = `calc(100vh - ${navTopHeight}px - 37px)`;
  return {
    navTopHeight,
    desktopHeight,
    desktopHeight36,
    desktopHeight16,
    originalHeight,
    desktopHeight37,
  };
}
