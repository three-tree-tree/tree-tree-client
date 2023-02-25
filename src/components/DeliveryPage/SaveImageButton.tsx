import React from 'react';
import FileSaver from 'file-saver';

import ButtonImage from './save-image-button.svg';

interface SaveImageButtonProps {
  className?: string;
  imageFile: Blob | string,
}

export const SaveImageButton = ({
  className,
  imageFile,
}: SaveImageButtonProps): React.ReactElement => {
  const handleOnClick = () => {
    FileSaver.saveAs(imageFile, "EarthAgent.jpg")
  }
  return (
    <img src={ButtonImage} className={`${className}`} onClick={handleOnClick} />
  );
};
