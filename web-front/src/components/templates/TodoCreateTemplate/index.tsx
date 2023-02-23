import { useTodoContext } from '../../../contexts/TodoContext'
import { BaseLayout } from '../../organisms/BaseLayout'
import { InputForm } from '../../atoms/InputForm'
import { TextArea } from '../../atoms/TextArea'
import { CommonButton } from '../../atoms/CommonButton'
import { useTodoCreateTemplate } from './useTodoCreateTemplate'

export const TodoCreateTemplate = () => {
    const { addTodo } = useTodoContext()
    const [
        { inputTitle, inputContent },
        { handleChangeTitle, handleChangeContent, handleCreateTodo },
    ] = useTodoCreateTemplate({ addTodo })

    return (
        <BaseLayout title={'create Todo'}>
            <div className="container">
                <form className="" onSubmit={handleCreateTodo}>
                    <div className="area">
                        <InputForm
                            value={inputTitle}
                            placeholder={'title'}
                            onChange={handleChangeTitle}
                        />
                    </div>
                    <div className="area">
                        <TextArea
                            value={inputContent}
                            placeholder={'content'}
                            onChange={handleChangeContent}
                        />
                    </div>
                    <div className="area">
                        <CommonButton type="submit" title="submit" />
                    </div>
                </form>
            </div>
        </BaseLayout>
    )
}
