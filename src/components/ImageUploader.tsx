import React, { EventHandler } from "react";
export class ImageUpload extends React.Component<
  any,
  { file: File | null; imagePreviewUrl: string | null }
> {
  constructor(props: React.ComponentProps<any>) {
    super(props);
    this.state = {
      file: null,
      imagePreviewUrl: null
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  _handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files![0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result as string
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    }

    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input type="file" onChange={this._handleImageChange} />
          <button type="submit" onClick={this._handleSubmit}>
            Upload Image
          </button>
        </form>
        {$imagePreview}
      </div>
    );
  }
}
