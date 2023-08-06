import { CustomButton } from "./CustomButton"

// eslint-disable-next-line react/prop-types
export function AIPicker({ prompt, setPrompt, generatingImage, handleSubmit }) {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Tell the AI how your shirt should look like..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />

      <div className="flex flex-wrap gap-3">
        {generatingImage ? (
          <CustomButton
            type="outline"
            title="Generating image with AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}